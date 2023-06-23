$(document).ready(function() {
  var cardLibrary = [
      { id: 1, name: "晓美焰", description: "“把感谢和责任混为一谈是不行的。越是重复，就越是偏离你和我生活过的时间。心意也相互偏离，言语也渐渐无法相通。我想我大概早已经迷路了。“要拯救你”这是我最初的心意，而到如今，这是最后留下的唯一路标。”", imageUrl: "./img/people/1.jpg"},
      { id: 2, name: "鹿目圆", description: "“太悲惨了，明明是为了大家一直独自一人在战斗的人，居然谁都没有发现，这实在是太寂寞了啊。”", imageUrl: "./img/people/2.jpg"},
      { id: 3, name: "兰斯洛特", description: "亚瑟的脑海里出现一幅凄惨的画面——他们中最仁慈的人，这个俗世的罪人踉踉跄跄地走在三个超越世俗的处子骑士后面，这是他天生的、英勇却无济于事的苦工。", imageUrl: "./img/people/3.jpg"},
      { id: 4, name: "兰斯洛特", description: "兰斯洛特转身向自己的马走去，手上还举着剑，就如同丢弃了灵魂的木偶。他感受到自己之所以勇敢而且仁慈是因为自己心中既有残酷也有怯懦。", imageUrl: "./img/people/4.jpg"},
      { id: 5, name: "纳西瑟斯", description: "“美，是致命的愉悦~~~”", imageUrl: "./img/people/5.jpg"},
      { id: 6, name: "李白", description: "“众鸟高飞尽，孤云独去闲。”", imageUrl: "./img/people/6.jpg"},
      { id: 7, name: "尼采", description: "疯狂对于个体，只是相对罕见的事情——而国体政党民族时代的疯狂，那就是规则。  成为道德的行动本身不是道德的。使人们服从道德的原因是各种各样的：奴性，虚荣，自私，阴郁的热情，听天由命或孤注一掷。服从道德，恰如服从一位君主，本身并无道德可言。  有的人死后方生。", imageUrl: "./img/people/7.jpg"},
      { id: 8, name: "贝多芬", description: "“她爱我的程度比她爱她丈夫还深，但是他是她的爱人，而我不是。”", imageUrl: "./img/people/8.jpg"},
      { id: 9, name: "鲁迅", description: "“申飞……。”“我称你什么呢？我空着。你自己愿意称什么，你自己添上去罢。我都可以的。”“你以为我发了疯么？你以为我成了英雄或伟人了么？不，不的。这事情很简单；我近来已经做了杜师长的顾问，每月的薪水就有现洋八十元了。”“申飞……。”“你将以我为什么东西呢，你自己定就是，我都可以的。”", imageUrl: "./img/people/9.png"},
      { id: 10, name: "加缪", description: "“报纸在老鼠事件里喋喋不休，对死人的事却只字不提。原因是老鼠死在大街上，而人却死在他们自己的房间里。”  “幸运的是，我们俨然确定了那是老鼠的局势。”", imageUrl: "./img/people/10.jpg"},
      { id: 11, name: "爱因斯坦", description: "“提出一个问题往往比解决一个问题更为重要，因为解决问题也许只不过是一个数学上或实验上的技能而已。而提出新的问题、新的可能性，从新的角度去看待旧的问题，都需要有创造性的想象力，而且标志着科学的真正进步。”", imageUrl: "./img/people/11.jpg"},
      { id: 12, name: "金木研", description: "“如果我闭上了双眼，看到的是黑暗的话，那么当我睁开眼睛去看这个世界的时候，是否会是一片光明？”  “没有光明是不幸的吗？需要光明才是真正的不幸。”", imageUrl: "./img/people/12.jpg"},
      { id: 13, name: "亚瑟王（Saber）", description: "“汲取了万人的意愿而却只回应其一的奇迹，从一开始就不应该存在。”", imageUrl: "./img/people/13.jpg"},
      { id: 14, name: "特斯拉", description: "“从具有可行性的理论到实际数据，没有什么东西是不能在脑海中预先测试的。人们将一个初步想法付诸实践的过程，完全是对精力、金钱和时间的浪费。”  “如果仇恨可以被转化成电，世界早已轻如鸿毛。”  “我的研究项目，已经走在时代前面太远了。”", imageUrl: "./img/people/14.jpg"},
      { id: 15, name: "普希金", description: "我们喜爱高尚的谎话，胜过喜爱许许多多的真理。  在穷乡僻壤，在囚禁的阴暗生活中，我的岁月就那样静静地消逝，失去了神往，失去了灵感，失去了眼泪，失去了生命，也失去了爱情。", imageUrl: "./img/people/15.jpg"},
      { id: 16, name: "夏娜", description: "做一场美梦,将其反映到行动上。  为别人的回忆而活是没有意义的。", imageUrl: "./img/people/16.png"},
      { id: 17, name: "亚瑟·摩根", description: "相信我，孩子，这个世上的好人不多，所以你要成为一个好人。  啊，世界上的傻瓜们，大家都拼了命地想要获取更多，殊不知我们拥有的才是最可笑的负担。", imageUrl: "./img/people/17.jpg"},
      { id: 18, name: "柯罗莎", description: "在沙漠里挖沙，来换一桶水，倘若继续挖，这湿沙里，便将有水涌出，便可无需换水……然而，本不应永远在沙漠中挖沙，本应有，除水以外之所求。", imageUrl: "./img/people/18.jpg"},
      { id: 19, name: "马克·吐温", description: "唉，的确如此。我了解你们的种族。你们是由绵羊组成的。只由少部分统治，很少或从来都不是由半数以上的多数统治。这压制了这个种族的情感、信念，由此冒出的是制造出最大的噪声的少数分子。有时候这些少数人的喧哗是正确的，有时候却是错误的。但是无论怎样，人群都要蜂拥追随。", imageUrl: "./img/people/19.jpg"},
      { id: 20, name: "小黑猫", description: "我想成为猫，所以学了meo，我晦气，所以只会呜，但是明天会更好的。", imageUrl: "./img/people/20.jpg"},
      { id: 21, name: "老子", description: "君子得其时则驾，不得其时则蓬累而行。  良贾深藏若虚，君子盛德容貌若愚。去子之骄气与多欲，态色与淫志，是皆无益于子之身。", imageUrl: "./img/people/21.jpg"},
      { id: 22, name: "威廉·莎士比亚", description: "世上之事物本无善恶之分，思想使然。  有些人因罪恶而升迁，有些人因德行而没落。", imageUrl: "./img/people/22.jpg"},
      { id: 23, name: "达芬奇", description: "你如果要做一个艺术家，你要牢记：必须开拓你的胸襟，务使心如明镜，能够照见一切事物，一切色彩！  有天资的人，当他们工作得最少的时候，实际上是他们工作得最多的时候。因为他们是在构思，并把想法酝酿成熟，这些想法随后就通过他们的手表达出来。", imageUrl: "./img/people/23.jpg"},
      { id: 24, name: "米开朗基罗", description: "在艺术的境界里，细节就是上帝。", imageUrl: "./img/people/24.jpg"},
      { id: 25, name: "歌德", description: "最糟糕的是人们在生活中经常受到错误志向的阻碍而不自知，真到摆脱了那些阻碍时才能明白过来。  智者和愚人都没有害，最危险的倒是智愚参半。", imageUrl: "./img/people/25.jpg"},
      { id: 26, name: "司空震", description: "目睹过毁灭，才能看到新生。  弱小并不可怕，可怕的是懦弱。", imageUrl: "./img/people/26.jpg"}
  ];
  
  function displayCard(card) {
      var imageUrl = card.imageUrl;
      var image = document.createElement('img');
      image.src = imageUrl;
      var kamian = document.createElement('div');
      kamian.className = 'card';
      VanillaTilt.init(kamian, {
        max: 15,
        speed: 400,
        glare: true
      });
      kamian.appendChild(image);
      var cardName = document.createElement('h1');
      cardName.innerText = card.name;
      kamian.appendChild(cardName);
      var cardInfo = document.createElement('p');
      cardInfo.innerText = card.description;
      kamian.appendChild(cardInfo);
  
      document.getElementById('main-page').appendChild(kamian);
  }
  
  $('#card-container').click(function() {
      var drawCount = parseInt(document.getElementById('draw-count').value);
      for (var i = 0; i < drawCount; i++) {
          drawCard();
      }
  });
  
  function drawCard() {
      var randomIndex = Math.floor(Math.random() * cardLibrary.length);
      var card = cardLibrary[randomIndex];
      displayCard(card);
  }
  });