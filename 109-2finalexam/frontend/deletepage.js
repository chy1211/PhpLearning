const deletePage = `
<article id="main">
	<header>
		<h2><a>刪除資料</a></h2>
	</header>
	<blockquote>
		<p>
			<input type="text" id="rsn" placeholder="水庫名稱"><br>
			<input type="text" id="esc" placeholder="有效蓄水量(萬立方公尺)"><br>
			<input type="text" id="cwl" placeholder="目前水位(公尺)"><br>
			<input type="text" id="csc" placeholder="目前蓄水容量(%)"><br>
			<input type="text" id="rt" placeholder="紀錄時間">
		</p>
		<footer>
			<button id="doinsert" class="button">送出資料</button>
		</footer>
	</blockquote>								
</article>		
`;
export { deletePage };
