import{_ as k}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as e,F as v,r as b,e as r,b as f,f as p,h as n,g as d,d as h,o as c,t as _,i as y}from"./app-BhcroyqS.js";const A={__name:"page.html",setup(u,{expose:s}){s();const a={MyComponent:p({setup(){const t=d("Hello world!"),o=i=>{t.value=i.target.value};return()=>[n("p",[n("span","Input: "),n("input",{value:t.value,onInput:o})]),n("p",[n("span","Output: "),t.value])]}}),defineComponent:p,h:n,ref:d};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},x=h(`<p>Content before <code>more</code> comment is regarded as page excerpt.</p><h2 id="page-title" tabindex="-1"><a class="header-anchor" href="#page-title"><span>Page Title</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>You can also set title in Markdown&#39;s Frontmatter:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Page Title</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-information" tabindex="-1"><a class="header-anchor" href="#page-information"><span>Page Information</span></a></h2><p>You can set page information in Markdown&#39;s Frontmatter.</p><ul><li>The author is Ms.Hope.</li><li>The writing date is January 1, 2020</li><li>Category is &quot;Guide&quot;</li><li>Tags are &quot;Page Config&quot; and &quot;Guide&quot;</li></ul><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content"><span>Page Content</span></a></h2><p>You are free to write your Markdown here.</p><div class="hint-container tip"><p class="hint-container-title">Assets</p><ul><li>You can place images besides your Markdown files nd use <strong>relative links</strong>.</li><li>For images in <code>.vuepress/public</code> directory, please use absolute links (i.e.: starting with <code>/</code>).</li></ul></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2><p>Each markdown page is converted into a Vue component, which means you can use Vue syntax in Markdown:</p><p>2</p>`,14),C=e("p",null,"You can also create and import your own components.",-1),F=e("hr",null,null,-1),w=e("p",null,"The theme contains some useful components. Here are some examples:",-1),B=h(`<li><p>A card:</p><div class="language-component line-numbers-mode" data-highlighter="shiki" data-ext="component" data-title="component" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>title: Mr.Hope</span></span>
<span class="line"><span>desc: Where there is light, there is hope</span></span>
<span class="line"><span>logo: https://mister-hope.com/logo.svg</span></span>
<span class="line"><span>link: https://mister-hope.com</span></span>
<span class="line"><span>background: rgba(253, 230, 138, 0.15)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1);function P(u,s,g,a,t,o){const i=y("Badge");return c(),l("div",null,[x,e("ul",null,[(c(),l(v,null,b(3,m=>e("li",null,_(m),1)),64))]),C,r(a.MyComponent),F,w,e("ul",null,[e("li",null,[e("p",null,[f("A dark blue badge text badge at the end of line. "),r(i,{text:"Badge text",color:"#242378"})])]),B])])}const q=k(A,[["render",P],["__file","page.html.vue"]]),H=JSON.parse('{"path":"/demo/page.html","title":"Page Config","lang":"en-US","frontmatter":{"title":"Page Config","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true,"footer":"Footer content for test","copyright":"No Copyright"},"headers":[{"level":2,"title":"Page Title","slug":"page-title","link":"#page-title","children":[]},{"level":2,"title":"Page Information","slug":"page-information","link":"#page-information","children":[]},{"level":2,"title":"Page Content","slug":"page-content","link":"#page-content","children":[]},{"level":2,"title":"Components","slug":"components","link":"#components","children":[]}],"git":{},"readingTime":{"minutes":1.14,"words":341},"filePathRelative":"demo/page.md","localizedDate":"January 1, 2020"}');export{q as comp,H as data};
