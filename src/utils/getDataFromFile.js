// function getDataFromFile() {
// const file = ''

//   const reader = new FileReader();
//   reader.onlo
// }

function urlToBlob() {
      let file_url =
        '../dataFiles/aa.txt'
      let xhr = new XMLHttpRequest();
      xhr.open("get", file_url, true);
      xhr.responseType = "blob";
      xhr.onload = function () {
        if (this.status == 200) {
          // if (callback) {
          // callback();
          console.log(this.response)
          const reader = new FileReader()
          reader.onload = function () {
            console.log('reader.result', reader.result)
          }
          reader.readAsDataURL(this.response);
          // reader.readAsText(this.response);
        }
      };
      xhr.send();



    //     function load(name) {        
    //       let xhr = new XMLHttpRequest(),           
    //        okStatus = document.location.protocol === "file:" ? 0 : 200;      
    //          xhr.open('GET', name, false);       
    //           xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8      
    //             xhr.send(null);        
    //             return xhr.status === okStatus ? xhr.responseText : null;    }  
    //               let text = load("./source.txt");    console.log(text);  //输出到浏览器控制器中//document.write(text);  //打印在网页中//document.write("<pre>"+text+"<pre/>");  //解决txt的换行无法打印到网页上的问题

      
    }

urlToBlob()