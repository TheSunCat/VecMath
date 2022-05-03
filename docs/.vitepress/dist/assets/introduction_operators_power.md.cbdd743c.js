import{_ as s,c as n,o as a,d as e}from"./app.2ed2a9a6.js";const k='{"title":"Power","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/operators/power.md","lastUpdated":null}',p={},o=e(`<h1 id="power" tabindex="-1">Power <a class="header-anchor" href="#power" aria-hidden="true">#</a></h1><p>The power operator raises all the components of a vector, quaternion to the given power:</p><div class="language-cpp line-numbers-mode"><pre><code>vecmath<span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3.1</span><span class="token punctuation">,</span><span class="token number">4.1</span><span class="token punctuation">]</span>
vecmath<span class="token operator">&gt;</span> b <span class="token operator">=</span> <span class="token number">3.0</span>
vecmath<span class="token operator">&gt;</span> c <span class="token operator">=</span> a <span class="token operator">^</span> b
vecmath<span class="token operator">&gt;</span> print c
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>For the resulting vector, all the components have been raised to the third power:</p><div class="language-cpp line-numbers-mode"><pre><code>vecmath<span class="token operator">&gt;</span> c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">29.791</span><span class="token punctuation">,</span><span class="token number">68.921</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The power operator also works on a scaler:</p><div class="language-cpp line-numbers-mode"><pre><code>a <span class="token operator">=</span> <span class="token number">2</span>
b <span class="token operator">=</span> <span class="token number">3.0</span>
c <span class="token operator">=</span> a <span class="token operator">^</span> b
print c
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Which is off course the following result:</p><div class="language-cpp line-numbers-mode"><pre><code>c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,9),r=[o];function t(c,l,i,u,d,m){return a(),n("div",null,r)}var h=s(p,[["render",t]]);export{k as __pageData,h as default};
