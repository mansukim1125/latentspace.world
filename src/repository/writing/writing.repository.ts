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
  {
    "id": "make-queue-using-stack-amortized-analysis",
    "title": "스택으로 큐 만들기",
    "slug": "make-queue-using-stack-amortized-analysis",
    "category": "Self Improvement",
    "date": new Date("2025-04-03"),
    "excerpt":
      "새로운 복잡도 개념을 배웠다. Amortized Analysis.",
    "readTime": 10,
    "content": "https://leetcode.com/problems/implement-queue-using-stacks/description/\n" +
      "\n" +
      "다음은 문제 번역.\n" +
      "> ** 두 개의 스택만을 사용하여 선입선출(FIFO) 큐를 구현하세요. **\n" +
      "> \n" +
      "> \n" +
      "> 구현된 큐는 일반적인 큐의 모든 기능(push, peek, pop, empty)을 지원해야 합니다.\n" +
      "> \n" +
      "> **`MyQueue` 클래스를 구현하세요:**\n" +
      "> \n" +
      "> - `void push(int x)`\n" +
      ">     \n" +
      ">     원소 `x`를 큐의 뒤쪽에 삽입합니다.\n" +
      ">     \n" +
      "> - `int pop()`\n" +
      ">     \n" +
      ">     큐의 앞쪽에서 원소를 제거하고, 그 값을 반환합니다.\n" +
      ">     \n" +
      "> - `int peek()`\n" +
      ">     \n" +
      ">     큐의 앞쪽에 있는 원소를 제거하지 않고 반환합니다.\n" +
      ">     \n" +
      "> - `boolean empty()`\n" +
      ">     \n" +
      ">     큐가 비어있으면 `true`, 그렇지 않으면 `false`를 반환합니다.\n" +
      ">     \n" +
      "> \n" +
      "> ---\n" +
      "> \n" +
      "> ** 주의 사항: **\n" +
      "> \n" +
      "> - 반드시 스택의 표준 연산만 사용해야 합니다.\n" +
      ">     \n" +
      ">     즉, **스택의 top에 push**, **top에서 peek 또는 pop**, **size 확인**, **비어 있는지 여부 확인**만 가능합니다.\n" +
      ">     \n" +
      "> - 사용하는 프로그래밍 언어에 따라 스택이 기본적으로 제공되지 않을 수 있습니다.\n" +
      ">     \n" +
      ">     이 경우, 리스트나 덱(deque, 양방향 큐)을 이용해 **스택의 표준 연산만 사용하여** 스택을 시뮬레이션해도 괜찮습니다.\n" +
      ">     \n" +
      "\n" +
      "스택(Stack)은 LIFO(Last In First Out) 방식으로 동작하는 자료구조이다.\n" +
      "\n" +
      "반면 큐(Queue)는 FIFO(First In First Out) 방식으로 동작한다. 문제에서 제시된 요구사항은 두 개의 스택을 사용하여 큐를 구현하는 것이다.\n" +
      "\n" +
      "사실 처음에는 이게 뭔 소린지 싶어서... 그냥 list를 사용해 구현하였다. 정답은 말 그대로 입력과 출력만 맞으면 되는 것 아닌가.\n" +
      "\n" +
      "## 첫 번째 구현\n" +
      "\n" +
      "그냥 Python의 list를 queue로 구현한 것이다. 복잡도 면에서 가장 좋다고 할 수 있지만 문제의 요구사항을 만족하지 못한다.\n" +
      "\n" +
      "```python\n" +
      "class MyQueue:\n" +
      "\n" +
      "    def __init__(self):\n" +
      "        self.queue = []\n" +
      "\n" +
      "    def push(self, x: int) -> None:\n" +
      "        self.queue.append(x)\n" +
      "\n" +
      "    def pop(self) -> int:\n" +
      "        ret_val = self.queue[0]\n" +
      "        self.queue = self.queue[1:]\n" +
      "        return ret_val\n" +
      "\n" +
      "    def peek(self) -> int:\n" +
      "        return self.queue[0]\n" +
      "\n" +
      "    def empty(self) -> bool:\n" +
      "        return len(self.queue) == 0\n" +
      "```\n" +
      "\n" +
      "## 두 번째 구현\n" +
      "\n" +
      "### 2-stack 아이디어\n" +
      "\n" +
      "두 개의 스택을 사용하여 큐를 구현하는 방법을 생각해 본다.\n" +
      "\n" +
      "스택에서 pop 연산은 맨 마지막에 들어간 item을 빼는 연산이다.\n" +
      "\n" +
      "그러나 queue에서의 pop 연산은 맨 처음에 들어간 item을 빼는 연산이다.\n" +
      "\n" +
      "queue에서의 FIFO를 구현하기 위해 queue의 push, pop/peek 연산을 수행하기 전, stack을 뒤집는 연산을 하도록 했다.\n" +
      "\n" +
      "- push 연산: 직전 연산이 push인 경우 스택을 뒤집을 필요가 없다.\n" +
      "- pop/peek 연산: 직전 연산이 pop/peek이라면 스택을 뒤집을 필요가 없다.\n" +
      "\n" +
      "그리하여 구현한 두 번째 풀이.\n" +
      "\n" +
      "flag 변수를 두어 직전에 push 연산이 일어났던 것인지, pop 연산이 일어났었는지를 판단하도록 하고,\n" +
      "\n" +
      "push 이후 pop, pop 이후 push/peek이 발생한 경우 원래 stack을 뒤집어 새로운 stack에 push 하도록 하였다.\n" +
      "\n" +
      "시간 복잡도는 push, pop, peek 연산에 대해 최악 경우 O(n), 최선 경우 O(1)이다.\n" +
      "\n" +
      "```python\n" +
      "class MyQueue:\n" +
      "\n" +
      "    def __init__(self):\n" +
      "        self.flag = True\n" +
      "        self.original_stack = []\n" +
      "\n" +
      "    def reverse_stack(self):\n" +
      "        new_stack = []\n" +
      "        while len(self.original_stack) > 0:\n" +
      "            popped_val = self.original_stack[-1]\n" +
      "            new_stack.append(popped_val)\n" +
      "            self.original_stack.pop()\n" +
      "        return new_stack\n" +
      "\n" +
      "    def push(self, x: int) -> None:\n" +
      "        if self.flag is False:\n" +
      "            self.original_stack = self.reverse_stack()\n" +
      "        self.flag = True\n" +
      "        self.original_stack.append(x)\n" +
      "\n" +
      "    def pop(self) -> int:\n" +
      "        if self.flag is True:\n" +
      "            self.original_stack = self.reverse_stack()\n" +
      "        ret_val = self.original_stack[-1]\n" +
      "        self.original_stack.pop()\n" +
      "        self.flag = False\n" +
      "        return ret_val\n" +
      "\n" +
      "    def peek(self) -> int:\n" +
      "        if self.flag is True:\n" +
      "            self.original_stack = self.reverse_stack()\n" +
      "        self.flag = False\n" +
      "        return self.original_stack[-1]\n" +
      "\n" +
      "    def empty(self) -> bool:\n" +
      "        return len(self.original_stack) == 0\n" +
      "```\n" +
      "\n" +
      "## 세 번째 방법\n" +
      "\n" +
      "내가 생각하기에 가장 깔끔하고 스택 두 개를 사용하는 조건에서 나름 효율적으로 보이는 풀이다.\n" +
      "\n" +
      "스택 두 개를 가지고 아래 동작을 수행하도록 한다.\n" +
      "\n" +
      "- 첫 번째 스택(stack1)은 새로운 요소를 추가(push)할 때 사용 (push 전용)\n" +
      "- 두 번째 스택(stack2)은 요소를 제거(pop)할 때 사용 (pop 전용)\n" +
      "\n" +
      "push할 때는 stack1에 push하면 된다. (O(1) 복잡도)\n" +
      "\n" +
      "pop할 때는 pop 전용 스택에서 pop을 하면 된다. (O(1) 복잡도)\n" +
      "\n" +
      "다만, pop 전용 스택이 텅 빈 경우 push 전용 스택을 다 빼서 pop 전용 스택에 넣어준다. (한 번의 pop 연산에서 최악의 경우 O(n))\n" +
      "\n" +
      "### 구현 방법\n" +
      "\n" +
      "```python\n" +
      "class MyQueue:\n" +
      "\n" +
      "    def __init__(self):\n" +
      "        self.stack_in = []\n" +
      "        self.stack_out = []\n" +
      "\n" +
      "    def move_in_to_out(self):\n" +
      "        if not self.stack_out:\n" +
      "            while self.stack_in:\n" +
      "                self.stack_out.append(self.stack_in.pop())\n" +
      "\n" +
      "    def push(self, x: int) -> None:\n" +
      "        self.stack_in.append(x)\n" +
      "\n" +
      "    def pop(self) -> int:\n" +
      "        self.move_in_to_out()\n" +
      "        return self.stack_out.pop()\n" +
      "\n" +
      "    def peek(self) -> int:\n" +
      "        self.move_in_to_out()\n" +
      "        return self.stack_out[-1]\n" +
      "\n" +
      "    def empty(self) -> bool:\n" +
      "        return not self.stack_in and not self.stack_out\n" +
      "```\n" +
      "\n" +
      "### 약간 어려운 시간 복잡도 분석\n" +
      "\n" +
      "위 구현에서 `move_in_to_out` 함수를 보자. 이 함수는 언제 실행될까? stack_out이 빈 경우 실행된다.\n" +
      "\n" +
      "이해를 돕기 위해 100개의 item을 넣고 빼는 상황을 가정해보자. 이런 상황에서 push 연산은 O(1) 복잡도를 가진다.\n" +
      "\n" +
      "> 여기서 질문: pop 연산의 경우 O(100)인가?\n" +
      "> \n" +
      "\n" +
      "최악 경우 복잡도를 계산한다면 O(100)으로 계산하겠지만, 이는 위 알고리즘의 수행 시간을 충분히 대변하지 못한다.\n" +
      "\n" +
      "왜냐하면 최초 pop 시점에 100개 item이 stack_out에 옮겨지고 이후 pop부터는 O(1) 시간이 소요되기 때문이다.\n" +
      "\n" +
      "따라서 평균적으로 보면 다음과 같이 계산할 수 있다. 여기서 **Amortized 시간 복잡도 개념이 등장한다.**\n" +
      "\n" +
      "전체 `pop()` 연산 n번에 대한 시간 복잡도는:\n" +
      "\n" +
      "- 최대 n개의 요소가 **한 번씩만 stack_in → stack_out으로 이동** → O(n)\n" +
      "- 그리고 `pop()` 연산은 각 요소당 1번씩 수행 → O(n)\n" +
      "\n" +
      "즉, **총 시간 = O(n) + O(n) = O(n)**\n" +
      "\n" +
      "단일 `pop()` 연산의 **암묵적(Amortized)** 시간 복잡도는: O(n) / n = O(1)이다.\n" +
      "\n" +
      "## 결론\n" +
      "\n" +
      "오늘은 Amortized 시간 복잡도에 대해 배웠다. 아래는 위키피디아의 설명.\n" +
      "\n" +
      "> 어떠한 임의의 알고리즘에 대해서, 어떤 연산은 자원적 측면에서 상당한 비용을 소모할 수 있지만, 반면 다른 연산은 그렇게 고비용을 소모하지 않을 수 있다. 분할상환 분석은 알고리즘의 전반적인 연산 집합에 대해 비용이 높은 연산, 그리고 비용이 덜한 연산 모두를 함께 고려하는 기법이라 하겠다. 이것은 다른 종류의 입력, 입력의 길이, 이 알고리즘의 성능에 영향을 미치는 다른 요인들을 전부 고려한다. 수행된 모든 연산에 대해 자료구조 연산만의 어떤 시퀀스를 수행하는 데 필요한 시간의 평균을 구한다. 비록 그 시퀀스에서 하나의 연산 비용이 비싸더라도, 그 일련의 연산에 대해 평균을 구하면 연산 하나의 평균 비용이 작다는 것을 분할 상환 분석을 이용해 보일 수 있다.\n" +
      "> \n" +
      "\n" +
      "이 개념을 오늘 풀어본 문제에 적용해 보면,\n" +
      "\n" +
      "`pop` 연산 중에는 가끔 `stack1 → stack2`로의 이동처럼 **상당한 비용이 드는 연산**이 발생하지만,\n" +
      "\n" +
      "대부분의 `pop` 연산은 단순한 `stack2.pop()`만 수행되어 **상수 시간**에 처리된다.\n" +
      "\n" +
      "결과적으로, 전체 `n`번의 `pop` 연산 시퀀스에 대해 분할 상환 분석을 적용하면,\n" +
      "\n" +
      "- 총 수행 시간은 O(n)이므로,\n" +
      "- pop 연산 하나의 평균 시간 복잡도는 O(1)이라는 것을 보일 수 있었다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "make-stack-using-queue",
    "title": "큐로 스택 만들기",
    "slug": "make-stack-using-queue",
    "category": "Self Improvement",
    "date": new Date("2025-04-04"),
    "excerpt":
      "하나의 문제를 여러 방법으로 풀어보는 것은 즐겁다.",
    "readTime": 10,
    "content": "어제는 스택으로 큐를 구현하는 문제였다면 오늘은 반대이다.\n" +
      "\n" +
      "FIFO 구조를 가지는 큐로 LIFO 구조를 가지는 스택을 구현하는 문제이다.\n" +
      "\n" +
      "## 첫 번째 아이디어\n" +
      "\n" +
      "push 할 때는 그냥 넣고, pop 또는 top 할 때는 아래와 같은 절차를 수행한다.\n" +
      "\n" +
      "1. 기존에 큐에 있던 원소들을 한 개만 남기고 임시 큐에 넣는다.\n" +
      "2. 기존 큐에 남은 한 개의 원소를 반환한다.\n" +
      "\n" +
      "이렇게 할 경우 시간 복잡도는 push: O(1), pop/top: O(n) 이다. 공간 복잡도는 O(n) 이다.\n" +
      "\n" +
      "### 첫 번째 아이디어 구현\n" +
      "\n" +
      "```python\n" +
      "from collections import deque\n" +
      "\n" +
      "class MyStack:\n" +
      "\n" +
      "    def __init__(self):\n" +
      "        self.queue = deque([])\n" +
      "\n" +
      "    def push(self, x: int) -> None:\n" +
      "        self.queue.append(x)\n" +
      "\n" +
      "    def get_top_val(self):\n" +
      "        temp_queue = deque([])\n" +
      "        while len(self.queue) > 1:\n" +
      "            temp_queue.append(self.queue.popleft())\n" +
      "        ret_val = self.queue.popleft()\n" +
      "        self.queue = temp_queue\n" +
      "        return ret_val\n" +
      "\n" +
      "    def pop(self) -> int:\n" +
      "        return self.get_top_val()\n" +
      "\n" +
      "    def top(self) -> int:\n" +
      "        top_val = self.get_top_val()\n" +
      "        self.queue.append(top_val)\n" +
      "        return top_val\n" +
      "\n" +
      "    def empty(self) -> bool:\n" +
      "        return len(self.queue) <= 0\n" +
      "\n" +
      "# Your MyStack object will be instantiated and called as such:\n" +
      "# obj = MyStack()\n" +
      "# obj.push(x)\n" +
      "# param_2 = obj.pop()\n" +
      "# param_3 = obj.top()\n" +
      "# param_4 = obj.empty()\n" +
      "```\n" +
      "\n" +
      "이 구현은 임시 큐를 사용하여 기존 큐를 임시 큐로 대체하는 방법이다. 물론 임시 큐를 사용하지 않고 하나의 큐만 사용할 수도 있다.\n" +
      "\n" +
      "```python\n" +
      "from collections import deque\n" +
      "\n" +
      "class MyStack:\n" +
      "\n" +
      "    def __init__(self):\n" +
      "        self.queue = deque([])\n" +
      "        self.items_changed = False\n" +
      "        \n" +
      "    def _relocation_queue(self):\n" +
      "        current_len = len(self.queue)\n" +
      "        for _ in range(current_len - 1):\n" +
      "            self.queue.append(self.queue.popleft())\n" +
      "\n" +
      "    def push(self, x: int) -> None:\n" +
      "        self.queue.append(x)\n" +
      "        self.items_changed = True\n" +
      "\n" +
      "    def pop(self) -> int:\n" +
      "        if self.items_changed:\n" +
      "            self._relocation_queue()\n" +
      "        self.items_changed = True\n" +
      "        return self.queue.popleft()\n" +
      "\n" +
      "    def top(self) -> int:\n" +
      "        if self.items_changed:\n" +
      "            self._relocation_queue()\n" +
      "            self.items_changed = False\n" +
      "        return self.queue[0]\n" +
      "\n" +
      "    def empty(self) -> bool:\n" +
      "        return len(self.queue) <= 0\n" +
      "\n" +
      "# Your MyStack object will be instantiated and called as such:\n" +
      "# obj = MyStack()\n" +
      "# obj.push(x)\n" +
      "# param_2 = obj.pop()\n" +
      "# param_3 = obj.top()\n" +
      "# param_4 = obj.empty()\n" +
      "```\n" +
      "\n" +
      "이 구현은 items_changed 라는 flag 변수를 이용하여 큐의 조성이 변경되었는지를 추적하고, pop 또는 top 연산 시 불필요한 재배치 연산을 하지 않도록 해 준다.\n" +
      "\n" +
      "## 두 번째 아이디어\n" +
      "\n" +
      "pop 또는 top 할 때는 그냥 빼고, push 할 때는 아래와 같은 절차를 수행한다.\n" +
      "\n" +
      "1. 큐에 넣고자 하는 값을 넣는다.\n" +
      "2. 방금 넣은 값을 제외한 나머지를 빼고 다시 큐에 넣는다.\n" +
      "\n" +
      "이렇게 할 경우 시간 복잡도는 push: O(n), pop/top: O(1) 이다. 공간 복잡도는 O(n) 이다.\n" +
      "\n" +
      "### 두 번째 아이디어 구현\n" +
      "\n" +
      "```python\n" +
      "from collections import deque\n" +
      "\n" +
      "class MyStack:\n" +
      "\n" +
      "    def __init__(self):\n" +
      "        self.queue = deque([])\n" +
      "\n" +
      "    def push(self, x: int) -> None:\n" +
      "        temp_queue = deque([x])\n" +
      "        while self.queue:\n" +
      "            temp_queue.append(self.queue.popleft())\n" +
      "        self.queue = temp_queue\n" +
      "\n" +
      "    def pop(self) -> int:\n" +
      "        return self.queue.popleft()\n" +
      "\n" +
      "    def top(self) -> int:\n" +
      "        return self.queue[0]\n" +
      "\n" +
      "    def empty(self) -> bool:\n" +
      "        return len(self.queue) <= 0\n" +
      "\n" +
      "# Your MyStack object will be instantiated and called as such:\n" +
      "# obj = MyStack()\n" +
      "# obj.push(x)\n" +
      "# param_2 = obj.pop()\n" +
      "# param_3 = obj.top()\n" +
      "# param_4 = obj.empty()\n" +
      "```\n" +
      "\n" +
      "첫 번째 아이디어와 마찬가지로 큐의 재배치 연산을 push 에서도 수행할 수 있다. 또한 위와 같이 임시 큐를 사용하지 않고 한 개의 큐만을 사용하여 해결할 수도 있다.\n" +
      "\n" +
      "```python\n" +
      "from collections import deque\n" +
      "\n" +
      "class MyStack:\n" +
      "\n" +
      "    def __init__(self):\n" +
      "        self.queue = deque([])\n" +
      "\n" +
      "    def push(self, x: int) -> None:\n" +
      "        self.queue.append(x)\n" +
      "        current_len = len(self.queue)\n" +
      "        for _ in range(current_len - 1):\n" +
      "            self.queue.append(self.queue.popleft())\n" +
      "\n" +
      "    def pop(self) -> int:\n" +
      "        return self.queue.popleft()\n" +
      "\n" +
      "    def top(self) -> int:\n" +
      "        return self.queue[0]\n" +
      "\n" +
      "    def empty(self) -> bool:\n" +
      "        return len(self.queue) <= 0\n" +
      "\n" +
      "# Your MyStack object will be instantiated and called as such:\n" +
      "# obj = MyStack()\n" +
      "# obj.push(x)\n" +
      "# param_2 = obj.pop()\n" +
      "# param_3 = obj.top()\n" +
      "# param_4 = obj.empty()\n" +
      "```\n" +
      "\n" +
      "## 소감\n" +
      "\n" +
      "일 주일 째 1일 1문제 풀이를 하고 있는데 습관 형성이 되는 것 같고 자존감에도 좋은 것 같다.\n" +
      "\n" +
      "앞으로도 이렇게 습관을 들이는 것이 내 발전에도, 건강에도 도움이 될 것이라 생각한다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  }
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
