class Post {
  constructor(title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id;
  }

  publish() {
    let postBox = document.createElement("div");
    let titleDom = document.createElement("h2");
    let bodyDom = document.createElement("p");
    titleDom.textContent = this.title;
    bodyDom.textContent = this.body;
    postBox.append(titleDom, bodyDom);
    postBox.id = this.id;
    document.getElementsByTagName("body")[0].appendChild(postBox);
  }
}
let post1 = new Post("post1", "this is new post!", "post1");
post1.publish();
