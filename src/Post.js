export function Post (title, category, text) {
    this.title = title;
    this.category = category;
    this.text = text;
    this.id = `${Date.now()}${Math.floor(Math.random()*10000)}`;

    console.log(this.id);
}