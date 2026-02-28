"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getBlogBySlug } from "@/lib/data";
import { BsArrowLeft } from "react-icons/bs";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link href="/blogs" className="text-orange-600 font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const isOpenAIPost = post.slug === "openai-json-schema-mcp-streaming-pause";

  return (
    <main className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium mb-8 transition"
        >
          <BsArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-10">
          <time
            dateTime={post.date}
            className="text-sm text-gray-500 block mb-3"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            {post.excerpt}
          </p>
        </header>

        {isOpenAIPost && (
          <article className="prose prose-gray max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                Recently, while implementing OpenAI structured outputs using{" "}
                <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">json_schema</code> with MCP
                (Model Context Protocol), I ran into a serious performance issue.
              </p>

              <p>The model would:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Start streaming normally</li>
                <li>Then call <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">mcp.list</code></li>
                <li>And suddenly… pause for <strong>30 seconds</strong></li>
                <li>After that, the next chunk appeared</li>
              </ul>

              <p>
                After investigation, the root cause turned out to be{" "}
                <strong>not specifying <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code></strong>.
                When I added <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code>, the pause dropped to 8–10 seconds.
              </p>
              <p>Let&apos;s break down why this happens.</p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
                🔎 What is json_schema in OpenAI?
              </h2>
              <p>
                OpenAI now allows enforcing structured outputs using:
              </p>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`response_format: {
  type: "json_schema",
  json_schema: { ... }
}`}
              </pre>
              <p>This guarantees:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Strict JSON</li>
                <li>No malformed outputs</li>
                <li>Predictable structure</li>
                <li>Production-ready parsing</li>
              </ul>
              <p>
                This is much more reliable than &quot;please return JSON&quot; prompting.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
                🔌 What is MCP?
              </h2>
              <p>
                MCP (Model Context Protocol) allows models to dynamically:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>List tools (<code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">mcp.list</code>)</li>
                <li>Call tools</li>
                <li>Fetch tool schemas</li>
                <li>Interact with external systems</li>
              </ul>
              <p>
                If you&apos;re using something like{" "}
                <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm break-all">https://mcp.botsify.com/mcp/list_actions</code>,
                the model dynamically evaluates available tools before deciding what to call.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
                🚨 The Real Problem: 30-Second Pause
              </h2>
              <p>Here&apos;s what was happening:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Model begins streaming.</li>
                <li>It internally triggers <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">mcp.list</code>.</li>
                <li>It evaluates all tools.</li>
                <li>It thinks deeply.</li>
                <li>It decides whether to call a tool.</li>
                <li>Streaming pauses for ~30 seconds.</li>
              </ul>
              <p>
                <strong>Why?</strong> Because I did not define:
              </p>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`tool_choice: "auto"`}
              </pre>
              <p>Or:</p>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`tool_choice: { "type": "function", "function": { "name": "myTool" } }`}
              </pre>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
                🧠 Why Missing tool_choice Causes Delay
              </h2>
              <p>When <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code> is NOT provided, the model must:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Evaluate all available tools</li>
                <li>Decide whether to call one</li>
                <li>Compare with schema requirements</li>
                <li>Validate output format</li>
                <li>Possibly retry internally</li>
              </ul>
              <p>This internal reasoning phase is expensive — especially when:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Using <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">json_schema</code></li>
                <li>Using MCP dynamic tools</li>
                <li>Streaming responses</li>
                <li>Large tool lists</li>
              </ul>
              <p>
                The model enters a &quot;decision paralysis&quot; loop: it has to satisfy both the structured output contract and the possibility of calling tools, so it spends a long time reasoning before emitting the next token.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
                ⚡ Why Adding tool_choice Reduced It to 8–10s
              </h2>
              <p>When I added <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code>, the model:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>No longer had to evaluate whether to use a tool</li>
                <li>Skipped tool selection reasoning</li>
                <li>Directly executed the intended flow</li>
                <li>Reduced internal retries</li>
              </ul>
              <p>The pause dropped from 30s → 8–10s.</p>
              <p>
                There&apos;s still some delay because MCP still loads, tool schema validation still occurs, and structured output validation still runs — but the heavy decision-making phase is reduced.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
                📊 What&apos;s Happening Internally (Advanced)
              </h2>
              <p>
                When using <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">json_schema</code>, MCP tools, streaming, and no{" "}
                <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code>, the model must satisfy two constraints at once:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>It must follow the strict JSON schema for the final response.</li>
                <li>It must decide whether a tool call is needed (and which one).</li>
              </ul>
              <p>
                If tool output also needs to match the schema, the model may internally &quot;simulate&quot; or plan tool outputs before streaming. That planning step adds significant latency. By setting{" "}
                <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code>, you remove the need for that decision step.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
                🛠 Best Practices If You&apos;re Using MCP + json_schema
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">✅ 1. Always Define tool_choice</h3>
              <p>If you know the tool:</p>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`tool_choice: {
  "type": "function",
  "function": { "name": "updateBotSettings" }
}`}
              </pre>
              <p>If you want auto:</p>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`tool_choice: "auto"`}
              </pre>
              <p>Even &quot;auto&quot; is better than undefined — it gives the model a clear instruction to consider tools without re-evaluating from scratch.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">✅ 2. Reduce Tool Count</h3>
              <p>
                If you expose many tools (e.g. 20+) with complex schemas and nested properties, the model&apos;s reasoning time increases. Keep only the necessary tools per request when possible.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">✅ 3. Avoid Huge JSON Schemas</h3>
              <p>
                Large <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">json_schema</code> definitions increase validation time, retry loops, and token usage. Flatten or simplify where you can.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">✅ 4. Measure Streaming Gaps</h3>
              <p>
                Don&apos;t just measure total time. Measure first-token time, time before a tool call, and time between chunks — that&apos;s where hidden latency shows up.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
                💡 Key Insight
              </h2>
              <p>
                The delay was not the network, not MCP server speed, and not streaming itself. It was <strong>model decision latency</strong>. The fix was giving the model clearer instructions: the more freedom you give the model (e.g. no <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code>), the slower it may think before producing the next token.
              </p>
            </div>
          </article>
        )}
      </div>
    </main>
  );
}
