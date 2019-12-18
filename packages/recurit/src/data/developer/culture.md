# INU가 만들 개발 문화

### 모두가 성장할 수 있는 동아리 협업 문화

### 1. 서로의 코드를 리뷰하면서 모르는 것을 질문하고, 효율적인 구조에 대해서 고민해요.

코드리뷰는 다른 사람이 짠 코드를 읽고 나서, **궁금한 점**을 물어보고, **개선할 점**을 알려 주고, 자신이 **느낀 점**을 말하면서 함께 생각을 모아 가는 과정을 말합니다.

실제로 구글, 카카오, 토스 등 대부분의 **IT 대기업 및 스타트업에서** 코드리뷰 문화를 도입해 빠르게 오류를 찾고, 서비스의 품질을 높이고 있답니다.

무엇보다 **퀄리티 높은 코드**를 짜는 프로그래머가 될 수 있어요!

> 이건 무슨 문법이야? 이건 왜 이렇게 이름을 지었어? 저 부분 이해하는 것 좀 도와 줄래?

```ts
interface IStudent {
  grade: number;
  klass: number;
  name: string;
}
```

<div class="callout">
  <span>👨‍💻</span>
  <span>위 코드는 학생 데이터의 형식을 나타내는 것 같은데, 왜 몇 반인지를 나타내는 속성 이름이 <code>class</code>가 아니라 <code>klass</code>로 정했어? 설마 오타인 거 아냐?</span>
</div>

<div class="callout">
  <span>👩‍💼</span>
  <span>아...! 자바스크립트 예약어 중에 <code>class</code>가 있어서 충돌을 피하기 위해서 일부러 <code>klass</code>라고 지은 거야!</span>
</div>

<div class="callout">
  <span>👨‍💻</span>
  <span>엥? 그렇게 한다고 해도 충돌이 많이 발생할 것 같지는 않은데? 가독성을 위해서 그냥 위험을 감수하는 게 어때?</span>
</div>

<div class="callout">
  <span>👩‍💼</span>
  <span>흠... <a href="https://stackoverflow.com/questions/7022397/using-reserved-words-as-property-names-revisited" target="_blank">여기</a>에 나오는데, 단축 표기법(<code>student.class</code>)을 이용해서 값을 가져올 때 버그가 발생할 수 있나 보더라고. 저 속성 때문에 다 <code>student['class']</code>같은  각괄호 표기법으로 값을 가져와야 하면 낭비잖아? 그리고 왠만하면 ECMA 공식 문서의 말을 따르는 게 좋을 것 같아!</span>
</div>

<div class="callout">
  <span>👨‍💻</span>
  <span>그러면 예약어와 충돌했을 때를 위한 네이밍 컨벤션 같은 표준은 없어? 파이썬의 PEP8 에서는 언더바를 써서 <code>class_</code> 같은 걸로 하던데.</span>
</div>

<div class="callout">
  <span>👩‍💼</span>
  <span><a href="https://stackoverflow.com/questions/17594253/javascript-convention-when-clashing-with-a-reserved-word" target="_blank">여기 답변</a>을 보니까 딱히 정해진 건 없더라고! 난 그냥 발음이 똑같아서 이렇게 했어.</span>
</div>

코드리뷰라고 해서, 거창한 것들을 필요로 하는 것은 절대 아닙니다. 그냥 다른 사람의 코드를 읽고, 궁금한 것을 순수하게 질문하고, 최선을 다해 답해주는 것만으로도 우리 모두 정말 많은 것을 배울 수 있어요.

어떻게 답변해야 할지 모르겠다면, 구글에 검색해 보세요! 바로 답변할 수 있는 사람은 아무도 없답니다.

코드리뷰를 통해 새로운 것을 배워나가는 기쁨을 누리면 좋겠어요.

> 이게 더 성능이 좋은 방법이야! 이게 더 이건 이렇게 하는 게 어때?

```js
const items = [
  {
    title: "증권가에도 '<b>펭수</b>' 열풍…'뽀로로 이을 캐릭터'로 평가",
    link: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=003&aid=0009605572',
    pubDate: 'Fri, 13 Dec 2019 07:17:00 +0900',
  },
  {
    title: "<b>펭수</b>, '천문: 하늘에 묻는다' 오디션 참가…허진호 감독도 반했다",
    link: 'http://www.apsk.co.kr/news/articleView.html?idxno=29230',
    pubDate: 'Fri, 13 Dec 2019 06:40:00 +0900',
  },
  {
    title: "'직통령' <b>펭수</b>, 전설의 시작은 '이육대'…20~40대 열광",
    link: 'http://www.ebn.co.kr/news/view/1013266/?sc=naver',
    pubDate: 'Fri, 13 Dec 2019 06:02:00 +0900',
  },
];

const news = [];

for(var i = 0; i < items.length; i++) {
  const metadata = await urlMetadata(items[i].link);
  items[i].image = metadata.image;
  news.push(items[i]);
}
```

<div class="callout">
  <span>👩‍💻</span>
  <span>네이버 검색 API로 얻어 온 뉴스 검색 결과가 담긴 배열 <code>news</code>가 있어.<br />
  <code>link</code> 속성으로 비동기 함수 <code>urlMetadata</code>를 호출한 결과인, <strong>미리보기 이미지 URL</strong>을 <code>image</code> 속성에 새로 추가하는 코드야.</span>
</div>

<div class="callout">
  <span>👨‍🚀</span>
  <span>음... 그런데 굳이 빈 배열을 초기화한 뒤에 또 <code>for</code>를 사용해서 하나씩 <code>push</code> 해줘야 할까?<br />
  바로 선언할 수 있도록 아래처럼 함수형으로 하는 건 어때?</span>
</div>

```js
const items = [...];

const news = await Promise.all(items.map(
  async (item: any) => {
    const { image } = await urlMetadata(item.link);
    return { ...item, image };
  }),
);
```

<div class="callout">
  <span>👨‍🚀</span>
  <span>저렇게 하면 불필요한 임시 변수인 <code>i</code>를 선언할 필요도 없어져서 가독성이 높아져.<br />
  또 구조 분해 할당 구문을 사용해서 <code>image</code>속성을 가져온다고 <code>metadata</code>라는 임시 변수에 또 저장할 필요 없이, 바로 <code>image</code>를 꺼낼 수 있다고!</span>
</div>

> 너처럼 이렇게 해야겠다는 걸 느꼈어!

<div class="callout">
  <span>👩‍💻</span>
  <span>확실히 목적에 맞는 코드인 것 같긴 해. <code>map</code>을 통한 <strong>함수형 프로그래밍</strong>을 구현한 거구나!</span>
</div>

<div class="callout">
  <span>👨‍🚀</span>
  <span>그렇지. 함수형 프로그래밍의 목적은 프로그래머가 모든 것을 예측할 수 있게, 다른 부수 효과를 최소화해서 부작용을 줄이는 거야.</span>
</div>

<div class="callout">
  <span>👩‍💻</span>
  <span>흠, <code>urlMetadata</code> 함수 때문에 <strong>매개변수 외의 다른 요소에 접근하지 않는, 완벽한 순수 함수</strong>라고 하기는 어려울 것 같은데, 이걸 개선할 필요가 있을까?</span>
</div>

<div class="callout">
  <span>👨‍🚀</span>
  <span>이 정도는 타협해도 괜찮을 것 같아. 지금으로서는 여러 번 비슷한 구조가 반복되어 추상화해야 할 필요성이 있는 것도 아니잖아.<br />
  오히려 코드가 더 읽기 힘들고 복잡해져서, 그걸로 얻을 이점보다 잃을 게 더 많을지도 모르겠어.</span>
</div>

<div class="callout">
  <span>👩‍💻</span>
  <span>동의해. 아무리 좋은 패러다임이나 프레임워크, 툴이라도 상황에 맞지 않으면 과감하게 포기하거나 접근을 다르게 하는 게 맞더라고.</span>
</div>

깃허브 적극 사용하기

노션, 슬랙 적극적으로 이용하기
