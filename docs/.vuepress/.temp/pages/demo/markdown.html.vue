<template><div><p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>
<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>
<!-- more -->
<h2 id="markdown-introduction" tabindex="-1"><a class="header-anchor" href="#markdown-introduction"><span>Markdown Introduction</span></a></h2>
<p>If you are a new learner and don't know how to write Markdown, please read <a href="https://theme-hope.vuejs.press/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown Intro</a> and <a href="https://theme-hope.vuejs.press/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown Demo</a>.</p>
<h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config"><span>Markdown Config</span></a></h2>
<p>VuePress introduce configuration for each markdown page using Frontmatter.</p>
<div class="hint-container important">
<p class="hint-container-title">Frontmatter</p>
<p>Frontmatter is an important concept in VuePress. If you don't know it, you need to read <a href="https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter Introduction</a>.</p>
</div>
<h2 id="markdown-extension" tabindex="-1"><a class="header-anchor" href="#markdown-extension"><span>Markdown Extension</span></a></h2>
<p>The Markdown content in VuePress will be parsed by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a>, which supports <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">syntax extensions</a> via markdown-it plugins.</p>
<h3 id="vuepress-enhancement" tabindex="-1"><a class="header-anchor" href="#vuepress-enhancement"><span>VuePress Enhancement</span></a></h3>
<p>To enrich document writing, VuePress has extended Markdown syntax.</p>
<p>For these extensions, please read <a href="https://theme-hope.vuejs.press/basic/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">Markdown extensions in VuePress</a>.</p>
<h3 id="theme-enhancement" tabindex="-1"><a class="header-anchor" href="#theme-enhancement"><span>Theme Enhancement</span></a></h3>
<p>By using VuePress plugins, the theme extends more Markdown syntax and provides richer writing functions.</p>
<h4 id="code-tabs" tabindex="-1"><a class="header-anchor" href="#code-tabs"><span>Code Tabs</span></a></h4>
<p>::: code-tabs#shell</p>
<p>@tab pnpm</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>@tab yarn</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>@tab:active npm</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/code-tabs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs"><span>Tabs</span></a></h4>
<p>::: tabs#fruit</p>
<p>@tab apple</p>
<p>Apple</p>
<p>@tab banana</p>
<p>Banana</p>
<p>@tab orange</p>
<p>Orange</p>
<p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/content/tabs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote"><span>Footnote</span></a></h4>
<p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/content/footnote.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="include-files" tabindex="-1"><a class="header-anchor" href="#include-files"><span>Include files</span></a></h4>
<!-- @include: ./README.md{11-17} -->
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/content/include.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="tex" tabindex="-1"><a class="header-anchor" href="#tex"><span>TeX</span></a></h4>
<p>$$<br>
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)<br>
= \left(\frac {y^{\omega}} {\omega}\right) \left{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right}<br>
$$</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/tex.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist"><span>Tasklist</span></a></h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li>
</ul>
<p><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/tasklist.html" target="_blank" rel="noopener noreferrer">View Detail</a></p>
<h4 id="image-enhancement" tabindex="-1"><a class="header-anchor" href="#image-enhancement"><span>Image Enhancement</span></a></h4>
<p>Support setting color scheme and size.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/image.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript"><span>Superscript and Subscript</span></a></h4>
<p>19^th^ H~2~O</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/sup-sub.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>Component</span></a></h4>
<div class="language-component line-numbers-mode" data-highlighter="shiki" data-ext="component" data-title="component" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>title: Mr.Hope</span></span>
<span class="line"><span>desc: Where there is light, there is hope</span></span>
<span class="line"><span>logo: https://mister-hope.com/logo.svg</span></span>
<span class="line"><span>link: https://mister-hope.com</span></span>
<span class="line"><span>background: rgba(253, 230, 138, 0.15)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://theme-hope.vuejs.press/guide/component/grammar.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="hint-box-and-gfm-alerts" tabindex="-1"><a class="header-anchor" href="#hint-box-and-gfm-alerts"><span>Hint box and GFM alerts</span></a></h4>
<div v-pre>
<p>Safely use {{ variable }} in Markdown.</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">Custom Title</p>
<p>A custom information container with <code v-pre>code</code>, <a href="#markdown-extension">link</a>.</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">Custom Title</p>
<p>A custom tip container</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Custom Title</p>
<p>A custom warning container</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Custom Title</p>
<p>A custom caution container</p>
</div>
<details class="hint-container details"><summary>Custom Title</summary>
<p>A custom details container</p>
</details>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html" target="_blank" rel="noopener noreferrer">GitHub Alert</a></li>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/hint.html" target="_blank" rel="noopener noreferrer">Hint boxes</a></li>
</ul>
<h4 id="align" tabindex="-1"><a class="header-anchor" href="#align"><span>Align</span></a></h4>
<p>::: center</p>
<p>I am center</p>
<p>:::</p>
<p>::: right</p>
<p>I am right align</p>
<p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/align.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs"><span>Attrs</span></a></h4>
<p>A <strong>word</strong>{#word} having id.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/attrs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="mark" tabindex="-1"><a class="header-anchor" href="#mark"><span>Mark</span></a></h4>
<p>You can mark ==important words== .</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/mark.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="spoiler" tabindex="-1"><a class="header-anchor" href="#spoiler"><span>Spoiler</span></a></h4>
<p>VuePress Theme Hope is !!powerful!!.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/spoiler.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize"><span>Stylize</span></a></h4>
<p>Donate Mr.Hope a cup of coffee. <em>Recommended</em></p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/stylize.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="reveal-js" tabindex="-1"><a class="header-anchor" href="#reveal-js"><span>Reveal.js</span></a></h4>
<iframe src="https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html" width="100%" height="420"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/content/revealjs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="chart-js" tabindex="-1"><a class="header-anchor" href="#chart-js"><span>Chart.js</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/chartjs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart"><span>Flowchart</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>PlantUML</span></a></h4>
<p>@startuml<br>
Alice -&gt; Bob: Authentication Request</p>
<p>alt successful case</p>
<pre><code>Bob -&gt; Alice: Authentication Accepted
</code></pre>
<p>else some kind of failure</p>
<pre><code>Bob -&gt; Alice: Authentication Failure
group My own label
Alice -&gt; Log : Log attack start
    loop 1000 times
        Alice -&gt; Bob: DNS Attack
    end
Alice -&gt; Log : Log attack end
end
</code></pre>
<p>else Another type of failure</p>
<p>Bob -&gt; Alice: Please repeat</p>
<p>end<br>
@enduml</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/plantuml.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo"><span>Code Demo</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/demo.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="playground" tabindex="-1"><a class="header-anchor" href="#playground"><span>Playground</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="kotlin-playground" tabindex="-1"><a class="header-anchor" href="#kotlin-playground"><span>Kotlin Playground</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/kotlin-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="sandpack-playground" tabindex="-1"><a class="header-anchor" href="#sandpack-playground"><span>Sandpack Playground</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/sandpack.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="vue-playground" tabindex="-1"><a class="header-anchor" href="#vue-playground"><span>Vue Playground</span></a></h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/vue-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


