
const links = document.getElementById("links");

const contentList = {
    "content": [
        {
            "contentName": "twitter",
            "href": "https://twitter.com/_alice_chang_",
            "text": "@_alice_chang_"
        },
        {
            "contentName": "YouTube",
            "href": "https://www.youtube.com/channel/UCp_hZ5Obp0tYiq0K1Qf3obw",
            "text": "ありすちゃんねる"
        },
        {
            "contentName": "お題箱",
            "href": "https://odaibako.net/u/_alice_chang_",
            "text": "アリスのお題箱"
        },
        {
            "contentName": "質問箱",
            "href": "https://peing.net/ja/_alice_chang__",
            "text": "アリスの質問箱"
        },
        {
            "contentName": "pixiv",
            "href": "https://www.pixiv.net/users/26261570",
            "text": "アリスのpixiv"
        }
    ]
};

const link_table = document.getElementById("link_table");

contentList.content.forEach(element => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = element.contentName;
    const td = document.createElement("td");
    const a = document.createElement("a");
    a.href = element.href;
    a.target = "_blank";
    a.textContent = element.text;
    td.appendChild(a);
    tr.appendChild(th);
    tr.appendChild(td);
    link_table.appendChild(tr);
});
