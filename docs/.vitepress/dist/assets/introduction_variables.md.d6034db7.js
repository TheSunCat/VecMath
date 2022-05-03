import{_ as a,c as n,o as s,d as e}from"./app.2ed2a9a6.js";const m='{"title":"Variables","description":"","frontmatter":{},"headers":[{"level":2,"title":"Scalar","slug":"scalar"},{"level":2,"title":"2D Vector","slug":"_2d-vector"},{"level":2,"title":"3D Vector","slug":"_3d-vector"},{"level":2,"title":"Quaternions","slug":"quaternions"}],"relativePath":"introduction/variables.md","lastUpdated":null}',t={},p=e(`<h1 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h1><p>For now, only floating point values are supported in the VecMath shell. Vector, matrix and quaternion types can be entered with a syntax that is similar to C/C++.</p><p>For now there are only four types of variables in the vecmathtool:</p><ul><li><p>Scalar: This variable is a single float value. This type can also be entered as an array with one element. This is off course perfectly valid because you can see scalars as one dimensional vectors.</p></li><li><p>2D vector: This variable must be entered as an array with two elements.</p></li><li><p>3D vector: This variable must be entered as an array with three elements.</p></li><li><p>Quaternion: This type is again an array, but the complex parts have to be defined between parentheses</p></li></ul><h2 id="scalar" tabindex="-1">Scalar <a class="header-anchor" href="#scalar" aria-hidden="true">#</a></h2><p>A scalar is a simple float which can be assigned to a variable with the equals (=) operator. To enter the example type in the code line per line, and press enter for each line. The print command prints out the the contents of a variable.</p><div class="language-cpp line-numbers-mode"><pre><code>vecmath<span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token number">7.0</span>
vecmath<span class="token operator">&gt;</span> print a
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The result is :</p><div class="language-cpp line-numbers-mode"><pre><code>a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7.0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>A scalar can also be defined as an array with a single element:</p><div class="language-cpp line-numbers-mode"><pre><code>vecmath<span class="token operator">&gt;</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9.3</span><span class="token punctuation">]</span>
vecmath<span class="token operator">&gt;</span> print b
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The result is :</p><div class="language-cpp line-numbers-mode"><pre><code>b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9.3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2d-vector" tabindex="-1">2D Vector <a class="header-anchor" href="#_2d-vector" aria-hidden="true">#</a></h2><p>A 2d vector is defined as an array of two floats (or two operations that result in a float). The REPL shell does not make a distinction between points (place vectors) or vectors. The user (you) has to make that distinction theirself:</p><div class="language-cpp line-numbers-mode"><pre><code>vecmath<span class="token operator">&gt;</span> v <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7.0</span><span class="token punctuation">,</span><span class="token number">2.3</span><span class="token punctuation">]</span>
vecmath<span class="token operator">&gt;</span> print v
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The result is :</p><div class="language-cpp line-numbers-mode"><pre><code>v <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7.0</span><span class="token punctuation">,</span><span class="token number">2.3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_3d-vector" tabindex="-1">3D Vector <a class="header-anchor" href="#_3d-vector" aria-hidden="true">#</a></h2><p>A 3d vector is defined as an array of two floats (or two operations that result in a float). Again, the REPL shell does not make a distinction between points (place vectors) or vectors. The user (you) has to make that distinction theirself:</p><div class="language-cpp line-numbers-mode"><pre><code>vecmath<span class="token operator">&gt;</span> v <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7.0</span><span class="token punctuation">,</span><span class="token number">2.3</span><span class="token punctuation">,</span><span class="token number">5.0</span><span class="token punctuation">]</span>
vecmath<span class="token operator">&gt;</span> print v
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The result is :</p><div class="language-cpp line-numbers-mode"><pre><code>v <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2.3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="quaternions" tabindex="-1">Quaternions <a class="header-anchor" href="#quaternions" aria-hidden="true">#</a></h2><p>To create a quaternion, the following syntax is used:</p><div class="language-cpp line-numbers-mode"><pre><code>vecmath<span class="token operator">&gt;</span> q1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
vecmath<span class="token operator">&gt;</span> print q1
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The output is:</p><div class="language-cpp line-numbers-mode"><pre><code>vecmath<span class="token operator">&gt;</span>q1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token punctuation">(</span> <span class="token number">2</span> <span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h4 id="this-corresponds-to-the-quaternion-1-2i-3j-4k" tabindex="-1">This corresponds to the quaternion: 1 + <span style="color:red;">2i</span> + <span style="color:green;">3j</span> + <span style="color:blue;">4k</span> <a class="header-anchor" href="#this-corresponds-to-the-quaternion-1-2i-3j-4k" aria-hidden="true">#</a></h4>`,29),o=[p];function r(l,c,i,u,d,h){return s(),n("div",null,o)}var v=a(t,[["render",r]]);export{m as __pageData,v as default};
