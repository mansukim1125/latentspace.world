import { IWriting } from '@/interface/writing/writing.interface';
import { IRepository } from '@/interface/repository/repository.interface';
import { WritingEntity } from '@/entity/writing/writing.entity';

// Mocking..
const writings: IWriting[] = [
  {
    "id": "build-a-consistent-habit",
    "title": "꾸준한 습관 형성",
    "slug": "build-a-consistent-habit",
    "category": "Self Improvement",
    "date": new Date("2025-03-31"),
    "excerpt":
      "꾸준한 습관을 형성하는 것은 어렵다.",
    "readTime": 10,
    "content": "## 개요\n\n꾸준한, 지속 가능한 습관을 형성하는 것은 어렵다.\n반복되는 출퇴근 사이클에서 퇴근 이후 목표를 설정하고, 계획하고, 수행하는 데 어려움이 있는 것 같다.\n> \n\n퇴근 후 집에 도착하면 피로감과 함께 \'오늘은 쉬자\'는 생각이 자연스레 떠오른다. 내일부터 제대로 시작하면 되겠지. 하지만 그 \'내일\'은 결코 오지 않는다.\n\n![(다이어트는 내일부터..)](https://dfxspjge1zm8u.cloudfront.net/production/images/image.png)\n\n(다이어트는 내일부터..)\n\n직장인의 저녁은 아이러니하다. 온전히 나를 위한 시간이면서도, 가장 에너지가 바닥난 시간이다. 의사결정 피로로 지친 뇌는 더 이상의 노력을 거부한다.\n\n![“내가 이런 것 까지 결정해야 돼?”](https://dfxspjge1zm8u.cloudfront.net/production/images/ChatGPT_Image_2025%E1%84%82%E1%85%A7%E1%86%AB_3%E1%84%8B%E1%85%AF%E1%86%AF_31%E1%84%8B%E1%85%B5%E1%86%AF_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_09_02_51.png)\n\n“내가 이런 것 까지 결정해야 돼?”\n\n이런 악순환을 깨기 위해 최근 코딩 테스트 스터디를 신청하여 오늘부터 시작했다.\n\n매일 하루에 한 문제씩 풀고 인증하는 간단한 일정이 생겼다.\n\n간단한 습관을 형성하는 것부터 해봐야지. 건강한 생활 습관을 구축하는 것이 중요하다.\n\n스터디를 통해 이 작은 시도가 어떤 변화를 가져올지 기대해본다.\n\n## 오늘의 문제\n\nhttps://www.acmicpc.net/problem/1032\n\n첫 날이라서 인지, 비기너 레벨이어서인지 문제가 굉장히 쉽다.\n\n문제를 간단히 설명하면, 주어진 문자열에서 동일한 위치에 동일한 문자가 나타나는지 여부를 판단하는 문제이다.\n\n다음은 의사코드.\n\n```\n함수 solution():\n    n을 입력받음 (문자열의 개수)\n    pattern = null\n    \n    n번 반복:\n        새 문자열(new_line)을 입력받음\n        \n        만약 pattern이 null이면:\n            pattern = new_line을 문자 리스트로 변환\n            다음 반복으로 이동\n            \n        pattern의 길이만큼 반복(i 사용):\n            ch_new_line = new_line의 i번째 문자\n            ch_pattern = pattern의 i번째 문자\n            \n            만약 ch_pattern이 ch_new_line과 다르면:\n                pattern[i]를 \'?\'로 변경\n                \n    pattern을 문자열로 합쳐서 출력\n```\n\n### Python\n\n```python\ndef solution():\n    n = int(input())\n\n    pattern = None\n    for _ in range(n):\n        new_line = input()\n        if pattern is None:\n            pattern = list(new_line)\n            continue\n        for i in range(len(pattern)):\n            ch_new_line = new_line[i]\n            ch_pattern = pattern[i]\n            if ch_pattern != ch_new_line:\n                pattern[i] = \'?\'\n\n    print(\'\'.join(pattern))\n\nif __name__ == \'__main__\':\n    solution()\n```\n\n## 보너스 문제란다.\n\n회문 판단하는 문제. 이 문제는 풀이가 여러 개 있는데, Python 으로는 아주 쉽게 풀 수 있다.\n\n```python\ndef solution():\n    sentence = input()\n    reversed_sentence = list(sentence)\n    reversed_sentence.reverse()\n    reversed_sentence = \'\'.join(reversed_sentence)\n\n    print(int(sentence == reversed_sentence))\n\nif __name__ == \'__main__\':\n    solution()\n```\n\nlist 뒤집고 원본 문자열과 비교하면 된다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "stdin-readline-nightmare",
    "title": "습관 형성 - 2일차",
    "slug": "stdin-readline-nightmare",
    "category": "Self Improvement",
    "date": new Date("2025-04-01"),
    "excerpt":
      "2일차 문제 풀이",
    "readTime": 5,
    "content": "봄기운이 완연하는 만우절이다.\n" +
      "\n" +
      "오늘 공개된 두 번째 문제를 풀었다.\n" +
      "\n" +
      "알고리즘 난이도 자체는 매우 쉬웠다만, 입출력에 난항을 겪어 풀이에 30분이 더 소요되었다.;;\n" +
      "\n" +
      "![image.png](https://footage.latentspace.world/production/images/image.png)\n" +
      "\n" +
      "뭐지..? 그래서 문자열이 몇 개 입력된다는 건가? N 을 입력받아야 할 것 같은데, 그런 건 없다.\n" +
      "\n" +
      "백준에서는 stdin/out 을 기반으로 풀이가 이루어지는데, 이 구조를 잘 생각해보아야 한다.\n" +
      "\n" +
      "…항상 입력의 마지막에는 개행(newline, ‘\\n’)이 입력된다는 점이다.\n" +
      "\n" +
      "이 점에 착안하여.. `마지막 문장이 텅 비어있다면 종료`하도록 해 풀었다.\n" +
      "\n" +
      "## 풀이\n" +
      "\n" +
      "```python\n" +
      "import sys\n" +
      "\n" +
      "input = sys.stdin.readline\n" +
      "\n" +
      "def solution():\n" +
      "    while True:\n" +
      "        line = input().rstrip('\\n') # <- 바로 이 부분이 문자열에 포함된 개행 문자를 잘라내는 것이다.\n" +
      "        if not line: # 그냥 엔터를 했다면(입력의 마지막이라면) 종료한다.\n" +
      "            break\n" +
      "\n" +
      "        lower_count = sum(1 for ch in line if ch.islower())\n" +
      "        upper_count = sum(1 for ch in line if ch.isupper())\n" +
      "        num_count = sum(1 for ch in line if ch.isdigit())\n" +
      "        space_count = sum(1 for ch in line if ch.isspace())\n" +
      "\n" +
      "        print(lower_count, upper_count, num_count, space_count)\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution()\n" +
      "\n" +
      "```\n" +
      "\n" +
      "이 풀이를 보면, rstrip(’\\n’) 을 하는 것을 볼 수 있다. 그냥 input() 을 사용했다면.. 개행이 뒤에 붙지 않는다.\n" +
      "\n" +
      "입력을 조금 더 빠르게 처리하기 위해 sys.stdin.readline 을 사용하였고 이는 개행 문자를 포함해 입력을 받아버린다.\n" +
      "\n" +
      "따라서 이를 적절히 처리하기 위해서는 rstrip(’\\n’) 이 필요하다. 뭐 아래처럼 풀 수도 있다.\n" +
      "\n" +
      "```python\n" +
      "# 기존 로직 동일\n" +
      "input()[:-1]\n" +
      "# 기존 로직 동일\n" +
      "```\n" +
      "\n" +
      "## 마무리\n" +
      "\n" +
      "이 문제는 핵심 알고리즘 자체는 매우 간단하지만, 입출력 조건에서 처음 접하는 낮선 조건으로 시간을 소요하였다.\n" +
      "\n" +
      "다양한 입/출력 조건을 제시하는 문제를 찾아보아야겠다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "3-day-problem-enjoyed-with-3-solutions",
    "title": "3일차 초콜릿.. 아니 문제 풀이",
    "slug": "3-day-problem-enjoyed-with-3-solutions",
    "category": "Self Improvement",
    "date": new Date("2025-04-02"),
    "excerpt":
      "3일차 문제는 3가지 풀이로 즐긴다",
    "readTime": 6,
    "content": "오늘은 3일 차 문제를 풀어보자.\n" +
      "\n" +
      "![image.png](https://footage.latentspace.world/production/images/problem3.png)\n" +
      "\n" +
      "위 문제에서 입력으로는 수식 하나가 주어지고 그 수식의 계산 결과를 출력하는 문제이다.\n" +
      "\n" +
      "수식은 기본적으로 하나의 숫자(0 또는 1)가 주어지고, 이 숫자에 팩토리얼 또는 논리 반전 연산을 적용할 수 있다.\n" +
      "\n" +
      "그러면 입력은 아래와 같이 주어진다.\n" +
      "\n" +
      "```\n" +
      "0! -> 0 팩토리얼은 1\n" +
      "1! -> 1 팩토리얼은 1\n" +
      "!0 -> 0의 논리 반전은 1\n" +
      "!1 -> 1의 논리 반전은 0\n" +
      "!!0!! -> 0의 팩토리얼은 1 의 팩토리얼은 1. 1에 논리 반전을 두 번 적용하면 1\n" +
      "!!1!! -> 1의 팩토리얼은 1 의 팩토리얼은 1. 1에 논리 반전을 두 번 적용하면 1\n" +
      "```\n" +
      "\n" +
      "팩토리얼이니 논리 반전이니 말이 어렵지만 간단히 정리하면\n" +
      "\n" +
      "```\n" +
      "숫자 오른 쪽 부분에 ! 가 한 개라도 나오면 그 부분은 1로 평가\n" +
      "```\n" +
      "\n" +
      "되고,\n" +
      "\n" +
      "```\n" +
      "숫자 왼 쪽 부분에 ! 가 나오면 그 횟수만큼(짝/홀) 논리를 반전시킨다.\n" +
      "```\n" +
      "\n" +
      "1!!!!! 이던 0!!!!!! 이던 1이라는 얘기다. 그러면 나머지는 숫자 앞에 있는 ! 연산만 남게 된다.\n" +
      "\n" +
      "## 로직 구상\n" +
      "\n" +
      "1. 수식 맨 끝에 ! 가 붙어있으면 논리 반전 연산자를 적용하기 이전까지의 피연산자는 1이 된다.\n" +
      "    \n" +
      "    그렇지 않으면 등장한 숫자가 피연산자가 된다.\n" +
      "    \n" +
      "2. 숫자 앞에 있는 ! 갯수를 세어 짝수인지, 홀수인지에 따라 논리를 반전시킨다.\n" +
      "    \n" +
      "    짝수: 피연산자 그대로\n" +
      "    \n" +
      "    홀수: !피연산자\n" +
      "    \n" +
      "\n" +
      "## 구현1\n" +
      "\n" +
      "```python\n" +
      "import sys\n" +
      "\n" +
      "input = sys.stdin.readline\n" +
      "\n" +
      "def eval(equation: str) -> int:\n" +
      "    exclamation_occured = 0\n" +
      "    if equation[-1] == '!': # 수식 뒤에 ! 가 붙어 있다면..\n" +
      "        exclamation_occured = 1\n" +
      "    \n" +
      "    operand = 0\n" +
      "    reversal_count = 0\n" +
      "    for ch in equation:\n" +
      "        if ch.isdigit(): # 숫자 등장\n" +
      "            if exclamation_occured: # 피연산자 1 로 간주\n" +
      "                operand = 1\n" +
      "            else:\n" +
      "                operand = int(ch)\n" +
      "            break\n" +
      "        reversal_count += 1\n" +
      "    \n" +
      "    if reversal_count % 2 == 0: # 숫자 앞 단에 붙어있는 느낌표 갯수가 짝수이면\n" +
      "        return operand\n" +
      "    else:\n" +
      "        return int(not operand) # 홀수이면 논리 반전\n" +
      "\n" +
      "def solution():\n" +
      "    n = int(input())\n" +
      "    for _ in range(n):\n" +
      "        print(eval(input()[:-1]))\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution()\n" +
      "\n" +
      "```\n" +
      "\n" +
      "이 코드는 단순하지만 몇 가지 개선할 만한 부분이 있다.\n" +
      "\n" +
      "1. exclamation_occured 라는 변수는 굳이 필요가 없다.\n" +
      "    \n" +
      "    그냥 피연산자(operand) 라고 하자.\n" +
      "    \n" +
      "\n" +
      "…그냥 조금 깔끔하게 써보자. 읽기 쉽고 이해하기 쉽게.\n" +
      "\n" +
      "## 구현22\n" +
      "\n" +
      "```python\n" +
      "import sys\n" +
      "\n" +
      "input = sys.stdin.readline\n" +
      "\n" +
      "def eval(equation: str) -> int:\n" +
      "    operand = int(equation[-1] == '!') # if 문은 불필요하다.\n" +
      "\n" +
      "    right = len(equation) - 1\n" +
      "    while equation[right] == '!': # 숫자 찾기\n" +
      "        right -= 1\n" +
      "\n" +
      "    operand = int(equation[right]) | operand # 느낌표가 있다(1)면 OR 연산으로 무조건 1처리\n" +
      "\n" +
      "\t\t# if right < 0.. 하려다가 max 함수로 lower-bound 를 0으로 처리\n" +
      "    reversal_count = max(right, 0)\n" +
      "\n" +
      "\t\t# 같으면 0, 다르면 1. 논리 반전 횟수가 짝수(0)이면 그대로, 홀수(1)이면 반전\n" +
      "    return operand ^ reversal_count % 2\n" +
      "\n" +
      "def solution():\n" +
      "    n = int(input())\n" +
      "    for _ in range(n):\n" +
      "        print(eval(input()[:-1]))\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution()\n" +
      "\n" +
      "```\n" +
      "\n" +
      "또 다르게도 풀어보았다.\n" +
      "\n" +
      "## 구현333\n" +
      "\n" +
      "```python\n" +
      "import sys\n" +
      "\n" +
      "input = sys.stdin.readline\n" +
      "\n" +
      "def eval(equation: str) -> int:\n" +
      "    for i, char in enumerate(equation):\n" +
      "        if char in '01': # 숫자가 등장하면\n" +
      "            n = int(char)\n" +
      "            # 숫자를 기준으로 반갈\n" +
      "            prefix = equation[:i]\n" +
      "            suffix = equation[i+1:]\n" +
      "            break\n" +
      "    \n" +
      "    # 팩토리얼(!) 연산\n" +
      "    if len(suffix):\n" +
      "        n = 1  # 0!와 1! 모두 1이므로..\n" +
      "    \n" +
      "    return n ^ (len(prefix) % 2) # 이거는 2번째 풀이와 동일하다.\n" +
      "\n" +
      "def solution():\n" +
      "    n = int(input())\n" +
      "    for _ in range(n):\n" +
      "        print(eval(input().rstrip('\\n')))\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution()\n" +
      "\n" +
      "```\n" +
      "\n" +
      "## 마지막\n" +
      "\n" +
      "오늘은 문제를 여러 가지 방법으로 풀어보았다.\n" +
      "\n" +
      "난이도는 그렇게 어렵지는 않았지만 문제를 여러 방법으로 해결해보면서 로직 상 불필요한 부분을 없애고 코드가 간결해졌다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
];

export class WritingRepository implements IRepository<IWriting> {
  private readonly writings: IWriting[];

  private constructor() {
    // Mocking..
    this.writings = writings;
  }

  public static createInstance(): WritingRepository {
    return new WritingRepository();
  }

  public async findAll(): Promise<WritingEntity[]> {
    return this.writings.map((writing) => new WritingEntity(writing));
  }

  public async findOne(id: string): Promise<WritingEntity> {
    const writing = this.writings.find((writing) => writing.id === id);
    if (!writing) {
      throw new Error('No writing with id ' + id);
    }

    return new WritingEntity(writing);
  }

  public async findFeaturedWritings() {
    const writings = await this.findAll();
    return writings.slice(0, 2);
  }
}
