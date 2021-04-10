class Taiyaki {
  constructor(content) {
      this.content = content; 
  }

  Taiyaki_content(){
for (let i = 0; i < this.content.length; i++) {
    console.log("中身は"+ this.content[i] + "です");
}
  }
}
let taste = new Taiyaki(['あんこ','クリーム','チーズ']);
taste.Taiyaki_content();