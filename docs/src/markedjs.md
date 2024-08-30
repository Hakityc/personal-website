# 仿chatgpt流式输出并转markdown

## 流式输出

### 需求：流式输出

### 踩坑



## markedjs 

### 需求：解析markdown

### 踩坑

#### 解析完成的html没有样式

> 样式网站 http://zlyd.iccnconn.com/markdowncss/index.html

```vue	
// ChatTextMd.vue
<style >
@import url('@/styles/markdown/tailwindMd.css');
@import url('@/styles/markdown/custom.css');
</style>
```

代码高亮

```js
// ChatTextMd.vue
import { Marked, Renderer } from 'marked'
import { markedHighlight } from "marked-highlight"
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const marked = new Marked(
  markedHighlight({
    langPrefix,
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'markdown'
      return hljs.highlight(code, { language }).value
    },
  })
)
```

#### 样式不能局部导入

```css
//tailwindMd.css

.md-text-tailwind {
	/*原内容*/
}
```

```css
//custom.css
@font-face {
  font-family: VarelaRoundRegular;
  src: url('@/assets/font/VarelaRound-Regular.ttf');
}
.md-text-custom {
  pre {
    code {
      font-family: 'VarelaRoundRegular';
      font-size: 14px;
      padding-left: 12px;
      padding-right: 12px;
    }
  }
}
```

```vue
// ChatTextMd.vue

<template>
  <article
    class="md-text-tailwind md-text-custom"
  ></article>
</template>
```

#### 代码块复制粘贴

1. 样式

   自定义code渲染

   ```js
   const renderer = {
       code(code: string, infostring: string | undefined, escaped: boolean): string {
         console.log('code', code, 'infostring', infostring, 'escaped', escaped)
         return `<pre>
                 <div class='flex flex-col bg-#282C34' rounded-md overflow-hidden>
                   <header class='flex flex-row bg-#000000 justify-between text-3 text-#d9d9e3 p-2'>
                     <span>${infostring}</span>
                     <div class='flex flex-row items-center gap-1'>
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>
                       <button>Copy code</button>  
                     </div>
                   </header>
                   <hr></hr>
                   <code class='${langPrefix}${infostring} code'>
                     ${code}
                   </code>
                 </div>
               </pre>`
       }
     }
     marked.use({ renderer })
   ```

   

2. 功能

   - copy按钮点击事件挂载

     1. ❌︎使用id+document.getElementById 没法隔离其他组件

     1. ✔︎给Article加一个事件

        ```html
          <article
            v-html="mdText"
            @click="handleArticleClick($event)"
          ></article>
        ```
        绑定事件参考链接 https://segmentfault.com/q/1010000042001852 
        
        ```js
          const handleArticleClick = (event: MouseEvent) => {
            //XXX 参考链接 https://segmentfault.com/q/1010000042001852 这里能否优化？
            const target = event.target as HTMLElement
            if (target.tagName === 'BUTTON') {
              console.log(event)
            }
          }
        ```
   
   - 获取对应代码内容
   
     1. 获取内容参考https://github.com/markedjs/marked/pull/2616/commits/801188e58523cad1b751252d79c542e0c8177159#diff-341727a776b4530886ae0a951bb4131c91cf456314b59110b7ea1c79a6844509
   
        ```js
        const handleArticleClick = (event: MouseEvent) => {
          //XXX 参考链接 https://segmentfault.com/q/1010000042001852 这里能否优化？
          const target = event.target as HTMLElement
          const current = event.currentTarget as HTMLElement
          if (target.tagName === 'BUTTON') {
            //找到current 后代节点tag为code的 第一个元素 并获取其innerText   
            const code = current.querySelector('code')
            if (code) {
              const text = code.innerText
              // console.log(text)
              navigator.clipboard.writeText(text)
            }
          }
        }
        ```
   

#### 代码块开头前面多了一片空格

原md

```markdo
当然可以，以下是一个简单的Java代码示例，它定义了一个名为"HelloWorld"的类，并在其中包含一个输出"Hello, World!"的主方法：\n\n```java\npublic class HelloWorld {\n\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n```
```

生成的代码

```js

                  public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
                
```

解决：renderer中code换行导致的

```js
const renderer = {
    code(code: string, infostring: string | undefined, escaped: boolean): string {
      console.log('code', code, 'infostring', infostring, 'escaped', escaped)
      return `<pre>
              <div class='flex flex-col bg-#282C34' rounded-md overflow-hidden>
                <header class='flex flex-row bg-#000000 justify-between text-3 text-#d9d9e3 p-2'>
                  <span>${infostring}</span>
                  <div class='flex flex-row items-center gap-1'>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>
                    <button>Copy code</button>  
                  </div>
                </header>
                <hr></hr>
                <code class='${langPrefix}${infostring} code'>
                  ${code}
                </code>
              </div>
            </pre>`
    }
  }
  marked.use({ renderer })
```



