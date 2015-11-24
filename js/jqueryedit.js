/*页面加载时，让所有的td有一个点击的事件*/
$(document).ready(function()
{
	/*找到所有的td节点*/
	var tds = $("td");
     /*给所有的td节点增加点击事件*/
	tds.click(tdclick);
});


/*td被点击的事件*/
function tdclick(){
	/*0找到td节点*/
	var td = $(this);
	/*1取出当前td文本中的内容保存起来*/
	var text =td.text();
	/*2清空td中的内容*/
	td.html("");
	/*3建立一个文本框,也就是input 的元素节点*/
	var input = $("<input>");
	/*4设置文本框的值是保存起来的文本内容*/
	input.attr("value", text);
	/*4.5能够让文本框相应键盘事件,处理回车的事件*/
	input.keyup(function(event) {
		/* Act on the event */
		/*0 .获取用户按下键的键码*/
		var myevent = event || window.event;
		var kcode = myevent.keyCode;
		/*1 .判断是否是回车键按下*/
		if(kcode==13){
 			var inputnode = $(this);
			/*no.1获取文本框的内容保存*/
			var inputtext = inputnode.val();
			/*2.清空td里面的内容*/
			var  tdnode = inputnode.parent();
			/*3把保存的内容加回到Td中去*/
			tdnode.html(inputtext);
			/*4让td重新拥有click的事件*/

			tdnode.click(tdclick);
		}
    });
    /*5把文本框加入到td 中去*/
	td.append(input);

	/*5.5文本框中的文字被高亮选中*/

/*
需要注意的是由于select这个方法不是jquery拥有的，而我们在用jquery的过程中，
每一个jquery方法返回的仍然是一个jquery的对象，因此需要把jquery的对象转换为js中的dom对象，才能
执行这个方法
*/

var inputdom = input.get(0);
inputdom.select();


	/*6移出td上的点击事件*/
	td.unbind("click");

}
