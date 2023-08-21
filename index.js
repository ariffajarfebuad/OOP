import Table from "./script2.js";

console.log(Table, "table");

  const tableData = {
    columns: ["Name", "Email"],
    data: [
      ["Arif", "faajar@gmail.com"],
      ["Anang fauz", "anangf@gmail.com"]
    ]
  };

  const myTable = new Table(tableData);

  const app = document.getElementById("app");

  console.log(myTable.render(app));
  myTable.render(app);