import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8');

assert.match(html, /<form\b[^>]*>/i, 'deve conter formulário');
assert.match(html, /<label\b[^>]*for="nome"/i, 'deve haver label de nome');
assert.match(html, /<input\b[^>]*id="nome"/i, 'deve haver campo nome');
assert.match(html, /<input\b[^>]*type="email"/i, 'deve haver campo de e-mail');
assert.match(html, /<select\b/i, 'deve haver seletor');
assert.match(html, /<button\b[^>]*type="submit"/i, 'deve haver botão de envio');

assert.match(css, /\.formulario\s*\{[\s\S]*?max-width\s*:/, 'container deve ter largura máxima');
assert.match(css, /\.campos\s*\{[\s\S]*?display\s*:\s*flex[\s\S]*?flex-direction\s*:\s*column[\s\S]*?gap\s*:/, 'campos devem ser organizados em coluna com gap');
assert.match(css, /label\s*\{[\s\S]*?font-size\s*:/, 'labels devem ter tamanho de fonte');
assert.match(css, /input,\s*select\s*\{[\s\S]*?padding\s*:[\s\S]*?border\s*:[\s\S]*?border-radius\s*:[\s\S]*?font-size\s*:/, 'inputs e select devem receber estilo completo');
const regraBotao = css.match(/button\s*\{([\s\S]*?)\}/)?.[1] ?? '';
assert.match(regraBotao, /background-color\s*:/, 'botão deve ter cor de fundo');
assert.match(regraBotao, /color\s*:/, 'botão deve ter cor do texto');
assert.match(regraBotao, /padding\s*:/, 'botão deve ter espaçamento interno');
assert.match(regraBotao, /cursor\s*:\s*pointer/, 'botão deve indicar que é clicável');
assert.match(css, /\.linha-dupla\s*\{[\s\S]*?display\s*:\s*flex[\s\S]*?justify-content\s*:\s*space-between/, 'nome e e-mail devem usar flex com space-between');
assert.match(css, /button:hover\s*\{/, 'botão deve ter hover');

console.log('Todos os requisitos estruturais do formulário foram verificados.');
