export function Post (title, category, text, name = 'anonymous') {
    this.title = title;
    this.category = category;
    this.text = text;
    this.name = name
    this.id = `${Date.now()}${Math.floor(Math.random()*10000)}`;
}