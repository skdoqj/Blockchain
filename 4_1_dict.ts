//사전 타입
type Words = {
  [key: string]: string;
};

//사전
class Dict {
  private words: Words;
  constructor() {
    this.words = {}; // 수동으로 초기화
  }
  //추가 함수
  addfn(w: Word) {
    // class를 타입으로 사용할 수 있다
    if (this.words[w.term] === undefined) {
      this.words[w.term] = w.def;
    }
  }
  // 검색 함수
  def(v: string) {
    return this.words[v];
  }
  // 삭제 함수
  del(v: string) {
    if (this.words[v] !== undefined) {
      delete this.words[v];
    }
  }

  //업데이트 함수 추가하기
}

//단어
class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

//사용
const dict = new Dict();

const kimchi = new Word("kimchi", "한국음식");
const bab = new Word("bab", "밥");
dict.addfn(kimchi);
dict.addfn(bab);

dict.def("kimchi");
dict.del("kimchi");

console.log(dict);
