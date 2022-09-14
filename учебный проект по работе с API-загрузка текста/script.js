function load_data() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res =>{
        str_body = ""

        res.forEach(r => {
            str_body += `
                <tr>
                    <td>${r["title"]}</td>
                    <td>${r["body"]}</td>
                </tr>
            `
        });
        $("#tbody").html(str_body)
    })
}