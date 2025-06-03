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
    "title": "3일차 문제 풀이",
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
  },
  {
    "id": "algorithm-optimization-self-counting-strings",
    "title": "빈도를 세는 문제를 푸는 두 가지 접근",
    "slug": "algorithm-optimization-self-counting-strings",
    "category": "Self Improvement",
    "date": new Date("2025-04-10"),
    "excerpt":
      "문자열에서 특정 문자의 빈도를 세는 두 가지 방법을 비교한다. .count 를 사용한 해법과 해시맵을 활용한 빈도 계산의 시간 복잡도 차이를 실제 코드와 함께 알아보자.",
    "readTime": 10,
    "content": "이번주 월요일과 화요일에는 개인 사정으로 다른 일을 했다. 오늘부터 문제를 다시 풀어보자.\n" +
      "\n" +
      "## 문제\n" +
      "\n" +
      "숫자로만 구성된 문자열 `num`이 주어진다. 길이는 `n`이다. 모든 인덱스 `i`(`0 <= i < n`)에 대해, 숫자 `i`가 `num[i]` 횟수만큼 문자열 `num`에 나타나는지 확인한다. 이 조건이 모든 인덱스에 대해 참이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다.\n" +
      "\n" +
      "### 예시\n" +
      "\n" +
      "**예시 1:**\n" +
      "\n" +
      "```\n" +
      "입력: num = \"1210\"\n" +
      "출력: true\n" +
      "설명:\n" +
      "num[0] = '1'. 숫자 0은 num에 1번 나타난다.\n" +
      "num[1] = '2'. 숫자 1은 num에 2번 나타난다.\n" +
      "num[2] = '1'. 숫자 2는 num에 1번 나타난다.\n" +
      "num[3] = '0'. 숫자 3은 num에 0번 나타난다.\n" +
      "\n" +
      "```\n" +
      "\n" +
      "**예시 2:**\n" +
      "\n" +
      "```\n" +
      "입력: num = \"030\"\n" +
      "출력: false\n" +
      "설명:\n" +
      "num[0] = '0'. 숫자 0은 0번 나타나야 하지만, 실제로는 2번 나타난다.\n" +
      "num[1] = '3'. 숫자 1은 3번 나타나야 하지만, 실제로는 0번 나타난다.\n" +
      "num[2] = '0'. 숫자 2는 num에 0번 나타난다.\n" +
      "\n" +
      "```\n" +
      "\n" +
      "## 첫 번째 접근법: O(n²) 솔루션\n" +
      "\n" +
      "처음에는 문자열을 순회하면서 갯수를 세는 간단한 접근법을 생각했다.\n" +
      "\n" +
      "```python\n" +
      "class Solution:\n" +
      "    def digitCount(self, num: str) -> bool:\n" +
      "        for i in range(len(num)):\n" +
      "            count = list(num).count(str(i))\n" +
      "            if count != int(num[i]):\n" +
      "                return False\n" +
      "        return True\n" +
      "\n" +
      "```\n" +
      "\n" +
      "이 솔루션은 간결하고 이해하기 쉽지만, 시간 복잡도는 O(n²)이다:\n" +
      "\n" +
      "1. 바깥 반복문은 n번 실행된다 (각 인덱스마다 한 번씩)\n" +
      "2. 각 반복마다 `count()` 메서드가 전체 문자열을 순회한다 (n번의 연산)\n" +
      "3. 총 시간 복잡도: O(n²)\n" +
      "\n" +
      "## 두 번째 접근법: O(n) 솔루션\n" +
      "\n" +
      "해시 맵(Python에서는 딕셔너리)을 사용하여 시간 복잡도를 O(n)으로 줄이는 더 효율적인 접근법을 생각해 보았다.\n" +
      "\n" +
      "```python\n" +
      "def digitCount(self, num: str) -> bool:\n" +
      "    counts = {}\n" +
      "\n" +
      "    # 문자열에서 각 숫자의 출현 횟수를 세기 (O(n))\n" +
      "    for n in num:\n" +
      "        if n in counts:\n" +
      "            counts[n] += 1 # (O(1))\n" +
      "        else:\n" +
      "            counts[n] = 1 # (O(1))\n" +
      "\n" +
      "    # 각 인덱스 i가 num[i]번만큼 나타나는지 확인 (O(n))\n" +
      "    for i in range(len(num)):\n" +
      "        if str(i) not in counts: # (O(1))\n" +
      "            counts[str(i)] = 0 # (O(1))\n" +
      "        if counts[str(i)] != int(num[i]): # (O(1))\n" +
      "            return False\n" +
      "\n" +
      "    return True\n" +
      "\n" +
      "```\n" +
      "\n" +
      "### 최적화된 솔루션의 작동 방식\n" +
      "\n" +
      "1. 먼저, 문자열에서 각 숫자가 몇 번 나타나는지 추적하는 빈도 맵(`counts`)을 만든다.\n" +
      "    1. 이는 O(n) 시간이 소요된다.\n" +
      "2. 그런 다음, 각 인덱스 i를 반복하면서 숫자 i가 빈도 맵에 따라 정확히 num[i]번 나타나는지 확인한다.\n" +
      "    1. 이 또한 O(n) 시간이 소요된다.\n" +
      "3. 총 시간 복잡도는 O(n) + O(n) = O(n)이다.\n" +
      "\n" +
      "## 두 접근법 비교\n" +
      "\n" +
      "1. **첫 번째 접근법:**\n" +
      "    - 장점: 공간 복잡도 O(1)\n" +
      "    - 단점: 매 반복마다 전체 문자열을 스캔하므로 O(n²) 시간 복잡도를 가진다\n" +
      "2. **두 번째 접근법 (해시 맵 사용):**\n" +
      "    - 장점: 전체 문자열을 한 번만 스캔하므로 O(n) 시간 복잡도를 가진다\n" +
      "    - 단점: 공간 복잡도 O(n)\n" +
      "\n" +
      "## 결론\n" +
      "\n" +
      "입력 문자열의 길이 제한이 10개로 제한되어 있어 첫 번째 솔루션도 시간 복잡도 측면에서 그렇게 비효율적이라고 생각하지는 않는다.\n" +
      "\n" +
      "만약 입력 길이가 매우 커진다면 두 번째 솔루션이 보다 효율적일 것이다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "design-hashmap",
    "title": "간단한 Map 구현 하기",
    "slug": "design-hashmap",
    "category": "Self Improvement",
    "date": new Date('2025-04-10T14:42:37.989Z'),
    "excerpt":
      "정수 범위 값을 저장하는 간단한 Hash 구현",
    "readTime": 4,
    "content": "https://leetcode.com/problems/design-hashmap/\n" +
      "\n" +
      "오늘의 문제는 내장 해시 테이블 라이브러리 없이 해시맵을 직접 구현하는 문제였다.\n" +
      "\n" +
      "문제는 다음과 같은 기능을 가진 `MyHashMap` 클래스를 구현하는 것이다.\n" +
      "\n" +
      "- `MyHashMap()` - 빈 맵으로 객체를 초기화\n" +
      "- `put(key, value)` - 키-값 쌍을 삽입하거나 기존 키의 값을 업데이트\n" +
      "- `get(key)` - 특정 키에 매핑된 값을 반환하거나 키가 없으면 -1 반환\n" +
      "- `remove(key)` - 키와 해당 값을 제거\n" +
      "\n" +
      "키 값이 문자열인 줄 알았으나 정수 범위로 제한되어 있어서 구현이 매우 간단한 문제이다.\n" +
      "\n" +
      "시간 복잡도를 낮추는 방향으로 간단하게 구현해 보았다.\n" +
      "\n" +
      "## 간단한 배열 기반 구현\n" +
      "\n" +
      "배열을 직접 사용하는 방식이다. 문제의 제약 조건에 따라 키와 값이 0에서 10^6 사이라는 점을 활용했다.\n" +
      "\n" +
      "```python\n" +
      "class MyHashMap:\n" +
      "    def __init__(self):\n" +
      "        self.hashMap = [-1] * 1000001 # 입력 제한 길이: 1000000\n" +
      "\n" +
      "    def put(self, key: int, value: int) -> None:\n" +
      "        self.hashMap[key] = value\n" +
      "\n" +
      "    def get(self, key: int) -> int:\n" +
      "        return self.hashMap[key]\n" +
      "\n" +
      "    def remove(self, key: int) -> None:\n" +
      "        self.put(key, -1)\n" +
      "\n" +
      "```\n" +
      "\n" +
      "### 이 접근법의 특징\n" +
      "\n" +
      "- **시간 복잡도**: 모든 연산이 O(1) - 인덱스 접근은 상수 시간\n" +
      "- **공간 복잡도**: O(10^6) - 입력 범위에 맞는 고정 크기 배열\n" +
      "- **장점**: 구현이 단순하고 모든 연산이 매우 빠르다\n" +
      "- **단점**: 고정 크기 배열을 미리 만듦으로서 메모리 사용량이 많다",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "count-the-number-of-parallel-lines",
    "title": "평면 위의 평행선 개수 세기",
    "slug": "count-the-number-of-parallel-lines",
    "category": "Self Improvement",
    "date": new Date("2025-04-13"),
    "excerpt":
      "평면 위에 주어진 점들을 지나는 x축 또는 y축에 평행한 직선의 개수를 세는 문제",
    "readTime": 5,
    "content": "평면 위에 주어진 점들을 지나는 x축 또는 y축에 평행한 직선의 개수를 세는 문제이다.\n" +
      "\n" +
      "> 평면에 n개의 점이 있다. 그중 두 개 이상의 점을 지나면서 x축 또는 y축에 평행한 직선이 몇 개인지 알아내는 프로그램을 작성하시오.\n" +
      "> \n" +
      "\n" +
      "**입력**:\n" +
      "\n" +
      "- 첫째 줄에 n(1 ≤ n ≤ 100,000)이 주어진다.\n" +
      "- 다음 n개의 줄에는 각 점의 좌표가 주어진다.\n" +
      "- 같은 좌표가 여러 번 주어질 수 있으며, 그런 경우 서로 다른 점으로 간주한다.\n" +
      "- 좌표는 절댓값이 2^31보다 작은 정수이다.\n" +
      "\n" +
      "**출력**: 첫째 줄에 답을 출력한다.\n" +
      "\n" +
      "### 예시\n" +
      "\n" +
      "```\n" +
      "입력:\n" +
      "4\n" +
      "0 0\n" +
      "10 10\n" +
      "0 10\n" +
      "10 0\n" +
      "\n" +
      "출력:\n" +
      "4\n" +
      "```\n" +
      "\n" +
      "1. x축에 평행한 직선은 y좌표가 같은 점들을 지나게 된다.\n" +
      "2. y축에 평행한 직선은 x좌표가 같은 점들을 지나게 된다.\n" +
      "3. 직선이 의미를 가지려면 적어도 두 개 이상의 점을 지나야 한다.\n" +
      "\n" +
      "따라서 문제를 해결하는 핵심 아이디어를 아래와 같이 도출할 수 있다:\n" +
      "\n" +
      "- **동일한 x좌표 값을 가진 점이 2개 이상 있으면 y축에 평행한 직선이 존재한다.**\n" +
      "- **동일한 y좌표 값을 가진 점이 2개 이상 있으면 x축에 평행한 직선이 존재한다.**\n" +
      "\n" +
      "이 아이디어를 바탕으로 알고리즘을 작성해 보겠다.\n" +
      "\n" +
      "## 해법\n" +
      "\n" +
      "알고리즘은 다음과 같이 구현할 수 있다:\n" +
      "\n" +
      "1. 각 x좌표와 y좌표가 나타나는 빈도를 계산한다.\n" +
      "2. x좌표가 2번 이상 나타나면, 해당 x좌표를 가진 점들을 지나는 y축에 평행한 직선이 1개 있다는 의미이다.\n" +
      "3. y좌표가 2번 이상 나타나면, 해당 y좌표를 가진 점들을 지나는 x축에 평행한 직선이 1개 있다는 의미이다.\n" +
      "4. 이렇게 조건을 만족하는 직선의 개수를 세면 된다.\n" +
      "\n" +
      "## 구현\n" +
      "\n" +
      "```python\n" +
      "import sys\n" +
      "\n" +
      "input = sys.stdin.readline\n" +
      "\n" +
      "def solution():\n" +
      "    n = int(input())\n" +
      "\n" +
      "    x_occurrence, y_occurrence = {}, {}\n" +
      "\n" +
      "    for _ in range(n):\n" +
      "        x, y = input().split()\n" +
      "        if x in x_occurrence:\n" +
      "            x_occurrence[x] += 1\n" +
      "        else:\n" +
      "            x_occurrence[x] = 1\n" +
      "\n" +
      "        if y in y_occurrence:\n" +
      "            y_occurrence[y] += 1\n" +
      "        else:\n" +
      "            y_occurrence[y] = 1\n" +
      "\n" +
      "    x_items = list(filter(lambda item: item[1] >= 2, list(dict.items(x_occurrence))))\n" +
      "    y_items = list(filter(lambda item: item[1] >= 2, list(dict.items(y_occurrence))))\n" +
      "\n" +
      "    print(len(x_items) + len(y_items))\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution()\n" +
      "```\n" +
      "\n" +
      "예제 입력인 (0,0), (10,10), (0,10), (10,0)를 살펴보자.\n" +
      "\n" +
      "- x=0인 점: (0,0), (0,10) → 2개 → y축 평행선 1개\n" +
      "- x=10인 점: (10,10), (10,0) → 2개 → y축 평행선 1개\n" +
      "- y=0인 점: (0,0), (10,0) → 2개 → x축 평행선 1개\n" +
      "- y=10인 점: (10,10), (0,10) → 2개 → x축 평행선 1개\n" +
      "\n" +
      "따라서 총 4개의 직선이 답이 된다.\n" +
      "\n" +
      "## 시간 복잡도\n" +
      "\n" +
      "- 좌표 빈도 계산: O(n)\n" +
      "- 직선 개수 세기: O(n)\n" +
      "\n" +
      "따라서 전체 시간 복잡도는 O(n).",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "binary-substring-problem",
    "title": "이진 부분 문자열 문제",
    "slug": "binary-substring-problem",
    "category": "Self Improvement",
    "date": new Date("2025-04-14"),
    "excerpt":
      "",
    "readTime": 3,
    "content": "이진 문자열 `s`와 정수 `k`가 주어졌을 때, 길이가 `k`인 모든 이진 코드가 `s`의 부분 문자열로 존재하면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다.\n" +
      "\n" +
      "예를 들어:\n" +
      "\n" +
      "- `s = \"00110110\"`이고 `k = 2`인 경우, 길이가 2인 모든 이진 코드(\"00\", \"01\", \"10\", \"11\")가 부분 문자열로 존재하므로 정답은 `true`다.\n" +
      "- `s = \"0110\"`이고 `k = 2`인 경우, 이진 코드 \"00\"이 존재하지 않으므로 정답은 `false`다.\n" +
      "\n" +
      "이 문제는 주어진 문자열에 길이가 `k`인 모든 가능한 이진 조합이 부분 문자열로 나타나는지 확인하는 것이다.\n" +
      "\n" +
      "## 첫 번째 풀이\n" +
      "\n" +
      "```python\n" +
      "class Solution:\n" +
      "    def get_all_bins(self, k: int) -> List[str]:\n" +
      "        return [int(format(i, 'b')) for i in range(2 ** k)] # O(k * 2^k)\n" +
      "\n" +
      "    def hasAllCodes(self, s: str, k: int) -> bool:\n" +
      "        all_possible_bins = self.get_all_bins(k) # O(k * 2^k)\n" +
      "        sub_bins = set()\n" +
      "        iter_count = len(s) - k + 1\n" +
      "        for i in range(iter_count): # O(n - k + 1) => O(n)\n" +
      "            sub_bins.add(int(s[i:i + k])) # O(k)\n" +
      "        \n" +
      "        for possible_bin in all_possible_bins: # O(2^k)\n" +
      "            if possible_bin not in sub_bins:\n" +
      "                return False\n" +
      "        return True\n" +
      "```\n" +
      "\n" +
      "이 방법은 k 에 대해 가능한 이진 표현을 모두 만들고, 입력된 문자열로 만들 수 있는 모든 이진 표현에 포함되는지를 확인하는 방식이다.\n" +
      "\n" +
      "1. `get_all_bins`를 사용하여 길이가 `k`인 모든 가능한 이진 코드를 생성한다\n" +
      "2. 입력 문자열에서 길이가 `k`인 모든 부분 문자열을 추출하여 정수로 변환한다\n" +
      "3. 모든 가능한 코드가 부분 문자열에서 발견되는지 확인한다\n" +
      "\n" +
      "이 방법의 단점은 k 가 매우 커지면 그에 따라 필요한 저장 공간과 반복 횟수가 증가하게 된다. (2^k)\n" +
      "\n" +
      "총 복잡도는 O(k * 2^k + n * k + 2^k) ≈ O(k * 2^k + n * k) 인데, k 의 경우 문제에서 `1 <= k <= 20` 제약을 두고 있으므로 복잡도는 n 에 의해 좌우된다고 볼 수 있다. 전체적으로는 O(n * k) 로 간단히 표현할 수 있다.\n" +
      "\n" +
      "## 두 번째 풀이\n" +
      "\n" +
      "```python\n" +
      "class Solution:\n" +
      "    def hasAllCodes(self, s: str, k: int) -> bool:\n" +
      "        iter_count = len(s) - k + 1\n" +
      "        check_map = [False] * (2 ** k)\n" +
      "        for i in range(iter_count):\n" +
      "            check_map[int(s[i:i + k], 2)] = True\n" +
      "\n" +
      "        for check in check_map:\n" +
      "            if check is False:\n" +
      "                return False\n" +
      "\n" +
      "        return True\n" +
      "```\n" +
      "\n" +
      "이 문제에서는 모든 가능한 이진 코드 배열을 없애고 불리언 맵을 만들어 해당 배열에 False 값이 존재하는지 확인하는 방식이다.\n" +
      "\n" +
      "- 불리언 배열(`check_map`)을 사용하여 어떤 코드를 보았는지 추적한다\n" +
      "- 모든 가능한 이진 코드를 미리 생성할 필요성을 제거했다\n" +
      "\n" +
      "종전 풀이보다 메모리 효율성이 약간 더 나아졌다고 볼 수 있다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "baekjoon-25757",
    "title": "백준 25757 - 집합/해시",
    "slug": "baekjoon-25757",
    "category": "Self Improvement",
    "date": new Date("2025-04-16"),
    "excerpt":
      "알고리즘 스터디 3주차 문제: 집합/해시",
    "readTime": 4,
    "content": "https://www.acmicpc.net/problem/25757\n" +
      "\n" +
      "## 문제 설명\n" +
      "\n" +
      "- 임스가 다른 사람들과 미니게임을 함께 플레이하려고 한다.\n" +
      "- 플레이할 수 있는 게임은 세 종류:\n" +
      "    - 윷놀이(Y): 2명이 필요 (임스 포함)\n" +
      "    - 같은 그림 찾기(F): 3명이 필요 (임스 포함)\n" +
      "    - 원카드(O): 4명이 필요 (임스 포함)\n" +
      "- 여러 사람(N 명)이 임스와 게임하기를 신청\n" +
      "- 임스는 한 번 같이 플레이한 사람과는 다시 플레이하지 않음\n" +
      "\n" +
      "임스가 최대로 몇 번 게임을 플레이할 수 있는지 계산하는 것이다.\n" +
      "\n" +
      "## 문제 분석\n" +
      "\n" +
      "이 문제의 해법을 찾기 위해서는 아래를 고려해야 한다.\n" +
      "\n" +
      "1. 임스를 제외하고 필요한 인원은 각각 윷놀이 1명, 같은 그림 찾기 2명, 원카드 3명이다.\n" +
      "    1. 이 부분을 바로 캐치하지 못해 푸는 데 10분 정도 더 걸렸다;;\n" +
      "2. 동일한 사람이 여러 번 신청할 수 있지만, 실제로는 한 번만 게임에 참여할 수 있다.\n" +
      "3. 결국 사용 가능한 서로 다른 사람들의 수를 게임당 필요한 인원수로 나누면 된다.\n" +
      "\n" +
      "## 코드 구현\n" +
      "\n" +
      "```python\n" +
      "import sys\n" +
      "\n" +
      "input = sys.stdin.readline\n" +
      "\n" +
      "# 각 게임 유형별로 임스를 제외하고 필요한 인원 수\n" +
      "games = {\n" +
      "    \"Y\": 1,  # 윷놀이: 임스 + 1명\n" +
      "    \"F\": 2,  # 같은 그림 찾기: 임스 + 2명\n" +
      "    \"O\": 3,  # 원카드: 임스 + 3명\n" +
      "}\n" +
      "\n" +
      "def solution():\n" +
      "    n, kind_of_game = input().split()\n" +
      "    n = int(n)\n" +
      "\n" +
      "    # 중복 제거를 위한 집합(set) 자료구조 사용\n" +
      "    usernames = set()\n" +
      "    for _ in range(n):\n" +
      "        usernames.add(input().strip())  # 줄바꿈 문자 제거. 안 해도 상관 없다.\n" +
      "\n" +
      "    # 최대 게임 횟수 계산: 고유한 사람 수 // 게임당 필요한 인원 수\n" +
      "    print(len(usernames) // games[kind_of_game])\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution()\n" +
      "```\n" +
      "\n" +
      "## 시간 복잡도\n" +
      "\n" +
      "- 이 문제의 시간 복잡도는 O(N)이다. 여기서 N은 신청 횟수이다.\n" +
      "- 집합(set)에 요소를 추가하는 연산은 평균적으로 O(1)이므로, N번의 추가 연산에 대해 총 O(N)의 시간이 소요된다.\n" +
      "\n" +
      "## 공간 복잡도\n" +
      "\n" +
      "- 이 문제의 공간 복잡도는 O(K)이다. 여기서 K는 중복을 제거한 후의 고유한 사람 수이다.\n" +
      "- 최악의 경우 모든 신청자가 서로 다른 사람인 경우를 고려할 수 있는데, 이는 K = N이 되어 O(N)의 공간이 필요하게 된다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "sorting-words-by-length-and-alphanumeric-order",
    "title": "백준 1181 - 집합/문자열/정렬",
    "slug": "sorting-words-by-length-and-alphanumeric-order",
    "category": "Self Improvement",
    "date": new Date("2025-04-17"),
    "excerpt":
      "Set과 Heap 두 가지 방식으로 해결하는 방법",
    "readTime": 7,
    "content": "https://www.acmicpc.net/problem/1181\n" +
      "## 문제 설명\n" +
      "\n" +
      "오늘 문제는 알파벳 소문자로 이루어진 N개의 단어가 주어졌을 때, 아래와 같은 조건에 따라 정렬하여 출력하는 문제이다.\n" +
      "\n" +
      "1. 길이가 짧은 것부터\n" +
      "2. 길이가 같으면 사전 순으로\n" +
      "3. 중복된 단어는 하나만 남기고 제거\n" +
      "\n" +
      "**입력 예시**\n" +
      "\n" +
      "```\n" +
      "13\n" +
      "but\n" +
      "i\n" +
      "wont\n" +
      "hesitate\n" +
      "no\n" +
      "more\n" +
      "no\n" +
      "more\n" +
      "it\n" +
      "cannot\n" +
      "wait\n" +
      "im\n" +
      "yours\n" +
      "```\n" +
      "\n" +
      "**출력 예시**\n" +
      "\n" +
      "```\n" +
      "i\n" +
      "im\n" +
      "it\n" +
      "no\n" +
      "but\n" +
      "more\n" +
      "wait\n" +
      "wont\n" +
      "yours\n" +
      "cannot\n" +
      "hesitate\n" +
      "```\n" +
      "\n" +
      "## 접근 방법 1: Set을 활용한 풀이\n" +
      "\n" +
      "첫 번째 풀이 방법은 집합을 활용하여 중복을 제거하고, 정렬하는 방법이다.\n" +
      "\n" +
      "```python\n" +
      "import sys\n" +
      "\n" +
      "input = sys.stdin.readline\n" +
      "\n" +
      "def solution():\n" +
      "    n = int(input())\n" +
      "    word_set = set()\n" +
      "    for _ in range(n): # O(N)\n" +
      "        word_set.add(input().rstrip()) # 평균적으로 O(1)\n" +
      "\n" +
      "    sorted_words = sorted(list(word_set), key=lambda item: (len(item), item)) # O(N) + O(NlogN) => O(NlogN)\n" +
      "    [print(word) for word in sorted_words] # O(N)\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution() # O(N) + O(NlogN) + O(N) => O(NlogN) + O(2N) => O(NlogN)\n" +
      "```\n" +
      "\n" +
      "### Set 풀이 코드 설명\n" +
      "\n" +
      "1. `set()`을 사용해 모든 단어를 저장하면서 중복을 제거\n" +
      "2. 단어 길이, 사전 순으로 정렬\n" +
      "    1. `sorted()` 함수에 `key` 매개변수를 사용하여 정렬 기준을 지정\n" +
      "\n" +
      "### Set 풀이 시간 복잡도 분석\n" +
      "\n" +
      "- 단어 입력 및 set에 추가: O(N)\n" +
      "- 정렬: O(N log N)\n" +
      "- 출력: O(N)\n" +
      "- 전체 시간 복잡도: O(N log N)\n" +
      "\n" +
      "### Set 풀이 공간 복잡도 분석\n" +
      "\n" +
      "- Set에 단어 저장: O(N)\n" +
      "- 정렬을 위해 Set을 List로 변환: 추가로 O(N)\n" +
      "- 따라서 총 2N의 공간이 필요하지만, 빅오 표기법에서는 O(N)\n" +
      "\n" +
      "## 접근 방법 2: Heap을 활용한 풀이\n" +
      "\n" +
      "두 번째 풀이는 힙(Heap) 자료구조를 사용하는 방식이다.\n" +
      "\n" +
      "```python\n" +
      "import sys, heapq\n" +
      "\n" +
      "input = sys.stdin.readline\n" +
      "\n" +
      "def solution():\n" +
      "    n = int(input())\n" +
      "    word_heap = []\n" +
      "    for _ in range(n): # O(N) * O(logN) => O(NlogN)\n" +
      "        word = input().rstrip() # O(1)\n" +
      "        heapq.heappush(word_heap, (len(word), word)) # O(logN)\n" +
      "\n" +
      "    prev_word = ''\n" +
      "    while word_heap: # O(N) * O(logN) => O(NlogN)\n" +
      "        item = heapq.heappop(word_heap) # O(logN)\n" +
      "        if item[1] != prev_word:\n" +
      "            print(item[1])\n" +
      "            prev_word = item[1]\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution() # O(2NlogN) => O(NlogN)\n" +
      "```\n" +
      "\n" +
      "### Heap 풀이 코드 설명\n" +
      "\n" +
      "1. 각 단어를 `(길이, 단어)` 형태의 튜플로 힙에 추가.\n" +
      "    - 파이썬의 heapq은 우선 첫 번째 요소를 기준으로 정렬하고 길이가 같을 경우 두 번째 요소인 단어를 비교하여 사전 순으로 정렬한다.\n" +
      "2. 힙에서 하나씩 요소를 꺼내면서\n" +
      "    - 이전에 출력한 단어와 비교하여 중복을 제거한다. (이미 정렬된 상태이므로)\n" +
      "    - 새로운 단어만 출력한다.\n" +
      "\n" +
      "### Heap 풀이 시간 복잡도 분석\n" +
      "\n" +
      "- 단어 입력 및 힙에 추가: O(N log N)\n" +
      "- 힙에서 꺼내고 출력: O(N log N)\n" +
      "- 전체 시간 복잡도: O(N log N)\n" +
      "\n" +
      "### Heap 풀이 공간 복잡도 분석\n" +
      "\n" +
      "- 힙에 모든 단어를 저장: O(N)\n" +
      "- 별도의 컬렉션으로 변환할 필요 없이 힙에서 직접 추출하여 사용",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "min-max-score",
    "title": "백준 29723 - 해시/정렬",
    "slug": "min-max-score",
    "category": "Self Improvement",
    "date": new Date("2025-04-18"),
    "excerpt":
      "정렬을 이용하는 방법 + Quick Select 알고리즘을 활용하는 방법",
    "readTime": 6,
    "content": "[https://www.acmicpc.net/problem/29723](https://www.acmicpc.net/problem/29723)\n" +
      "\n" +
      "## 문제 소개\n" +
      "\n" +
      "브실대학은 특정 과목들의 성적 합을 통해 서류 전형의 합격 여부를 결정하는데, 어떤 과목이 반영되는지 일부만 공개한다.\n" +
      "\n" +
      "브실이가 얻을 수 있는 최소 점수와 최대 점수를 구하는 문제이다.\n" +
      "\n" +
      "### 문제 조건\n" +
      "\n" +
      "- 수강한 과목 수: N (1 ≤ N ≤ 10,000)\n" +
      "- 요구하는 과목 수: M (1 ≤ M ≤ N)\n" +
      "- 공개된 과목 수: K (1 ≤ K ≤ M)\n" +
      "- 각 과목의 점수: 0 ≤ 점수 ≤ 100\n" +
      "- 공개된 과목과 비공개된 과목은 모두 브실이가 수강한 과목에 포함되어 있음\n" +
      "- 과목은 중복되지 않는다.\n" +
      "\n" +
      "### 예시\n" +
      "\n" +
      "- 공개된 과목: physics(50점), python(90점) → 합계 140점\n" +
      "- 비공개 과목: calculus(100점), probability(70점), chemistry(80점), algorithm(100점)\n" +
      "- 추가로 필요한 과목 수: 1개\n" +
      "- 최소 점수: 140 + 70 = 210\n" +
      "- 최대 점수: 140 + 100 = 240\n" +
      "\n" +
      "## 문제 해법\n" +
      "\n" +
      "1. 공개된 K개 과목의 점수를 모두 합산한다. 이는 어차피 반영되어야 하는 점수이기 때문이다.\n" +
      "2. 총 M개 과목을 요구하므로, 추가로 M-K개 과목을 선택해야 한다.\n" +
      "3. 최소 점수를 구하려면, 비공개 과목 중 점수가 가장 낮은 M-K개 과목을 선택한다.\n" +
      "4. 최대 점수를 구하려면, 비공개 과목 중 점수가 가장 높은 M-K개 과목을 선택한다.\n" +
      "\n" +
      "## 최종 구현\n" +
      "\n" +
      "이 구현에서 중요한 부분은 비공개 과목이 존재하는 경우에만 비공개 과목 후보 리스트를 정렬, 그 중 필요한 갯수만큼을 뽑는 것이다.\n" +
      "\n" +
      "```python\n" +
      "from sys import stdin\n" +
      "\n" +
      "input = stdin.readline\n" +
      "\n" +
      "def solution():\n" +
      "    N, M, K = map(int, input().split())\n" +
      "    \n" +
      "    # 모든 과목 점수 저장\n" +
      "    courses = {}\n" +
      "    for _ in range(N):\n" +
      "        name, score = input().split()\n" +
      "        courses[name] = int(score)\n" +
      "    \n" +
      "    # 공개된 과목의 점수 합 계산\n" +
      "    revealed_sum = 0\n" +
      "    for _ in range(K):\n" +
      "        name = input().rstrip()\n" +
      "        revealed_sum += courses[name]\n" +
      "        courses.pop(name)  # 딕셔너리에서 해당 과목 제거\n" +
      "    \n" +
      "    # 비공개 과목 수\n" +
      "    additional_needed = M - K\n" +
      "    \n" +
      "    # 비공개 과목이 없는 경우\n" +
      "    if additional_needed <= 0:\n" +
      "        print(revealed_sum, revealed_sum)\n" +
      "        return\n" +
      "    \n" +
      "    # 남은 비공개 과목 점수들만 리스트로 추출\n" +
      "    remaining_scores = list(courses.values())\n" +
      "    \n" +
      "    # 남은 과목 중 비공개 과목 갯수만큼 선택\n" +
      "    remaining_scores.sort()\n" +
      "    min_score = revealed_sum + sum(remaining_scores[:additional_needed])\n" +
      "    max_score = revealed_sum + sum(remaining_scores[-additional_needed:])\n" +
      "    \n" +
      "    print(min_score, max_score)\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    solution()\n" +
      "```\n" +
      "\n" +
      "## 주의 사항 (실수할 수 있는 부분)\n" +
      "\n" +
      "### 리스트 슬라이싱\n" +
      "\n" +
      "처음에는 아래와 같이 리스트 슬라이싱을 사용해 최소/최대 점수를 계산했다. (아래 비공개 과목이 없는 경우 예외 처리가 없을 때의 코드)\n" +
      "\n" +
      "```python\n" +
      "min_k = sorted_scores[:number_of_unopened_courses]\n" +
      "max_k = sorted_scores[-number_of_unopened_courses:]\n" +
      "\n" +
      "print(sum(min_k) + base_score, sum(max_k) + base_score)\n" +
      "\n" +
      "```\n" +
      "\n" +
      "만약 `number_of_unopened_courses`가 0인 경우(모든 과목이 공개된 경우), `min_k = sorted_scores[:0]`는 빈 리스트를 반환하지만\n" +
      "\n" +
      "`max_k = sorted_scores[-0:]`는 전체 리스트를 반환하는 문제가 있다. 이는 Python에서 `[-0:]`가 `[0:]`와 동일하게 동작하기 때문이다.\n" +
      "\n" +
      "이 문제를 해결하기 위해 아래 조건을 추가하였다.\n" +
      "\n" +
      "### 추가 과목이 필요 없는 경우의 처리\n" +
      "\n" +
      "모든 과목이 공개된 경우(M = K)처럼 추가 과목이 필요 없는 경우는 별도로 처리하는 것이 깔끔하다.\n" +
      "\n" +
      "```python\n" +
      "additional_needed = M - K\n" +
      "if additional_needed <= 0:\n" +
      "    print(revealed_scores_sum, revealed_scores_sum)\n" +
      "    return\n" +
      "\n" +
      "```\n" +
      "\n" +
      "## 성능 분석\n" +
      "\n" +
      "이 알고리즘의 시간 복잡도는 다음과 같다:\n" +
      "\n" +
      "- 수강한 과목 입력: O(N)\n" +
      "- 공개 과목 입력: O(K)\n" +
      "- 비공개 과목 후보 리스트 정렬: O(N log N)\n" +
      "- 최소/최대 점수 계산: O(M-K)\n" +
      "\n" +
      "결과적으로 전체 시간 복잡도는 O(N log N)이다.\n" +
      "\n" +
      "공간 복잡도는 모든 과목과 점수를 저장하기 위해 O(N)이 필요하게 된다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "measuring-student-popularity",
    "title": "백준 25325 - 빈도/정렬",
    "slug": "measuring-student-popularity",
    "category": "Self Improvement",
    "date": new Date("2025-04-20"),
    "excerpt":
      "Counter 클래스를 활용한 빈도 측정과 정렬",
    "readTime": 5,
    "content": "[https://www.acmicpc.net/problem/25325](https://www.acmicpc.net/problem/25325)\n" +
      "\n" +
      "## 문제 소개\n" +
      "\n" +
      "이 문제는 입력된 이름이 언급된 횟수를 세는, 빈도를 구하고 이를 바탕으로 정렬을 하는 문제이다.\n" +
      "\n" +
      "학생들의 이름을 입력받고, 각 이름이 언급된 횟수를 센 뒤 언급된 횟수 내림차순/이름 오름차순으로 정렬하는 문제이다.\n" +
      "\n" +
      "## 문제 조건\n" +
      "\n" +
      "- 학생 수: n (3 ≤ n ≤ 100)\n" +
      "- 학생 이름 길이: 1 ≤ 길이 ≤ 10\n" +
      "- 입력되는 각 학생 이름은 중복되지 않음\n" +
      "- 각 학생은 1명 이상의 다른 학생을 좋아함\n" +
      "- 자기 자신을 좋아하는 경우는 없음\n" +
      "- 한 학생의 인기도는 그 학생을 좋아하는 다른 학생의 수로 정의됨\n" +
      "- 인기도가 높은 순으로 정렬하되, 인기도가 같은 경우 이름 사전순으로 정렬\n" +
      "\n" +
      "## 예시\n" +
      "\n" +
      "입력\n" +
      "\n" +
      "```\n" +
      "4\n" +
      "aaa bbb ccc ddd\n" +
      "bbb ddd\n" +
      "aaa ddd\n" +
      "aaa\n" +
      "aaa bbb\n" +
      "```\n" +
      "\n" +
      "출력\n" +
      "\n" +
      "```\n" +
      "aaa 3\n" +
      "bbb 2\n" +
      "ddd 2\n" +
      "ccc 0\n" +
      "```\n" +
      "\n" +
      "이 예시를 보면\n" +
      "\n" +
      "- 'aaa'는 3명(2번째, 3번째, 4번째 학생)이 좋아함\n" +
      "- 'bbb'는 2명(1번째, 4번째 학생)이 좋아함\n" +
      "- 'ddd'는 2명(1번째, 2번째 학생)이 좋아함\n" +
      "- 'ccc'는 아무도 좋아하지 않음\n" +
      "\n" +
      "## 문제 해법\n" +
      "\n" +
      "1. 각 학생이 좋아하는 학생 목록을 입력받으면서, 좋아하는 학생의 인기도를 증가시킨다.\n" +
      "    1. 여기에서 누가 좋아하는지는 중요치 않다. 그냥 입력된 이름의 갯수를 세면 된다.\n" +
      "2. 인기도를 기준으로 내림차순 정렬하고, 인기도가 같은 경우 이름을 사전순으로 정렬한다.\n" +
      "\n" +
      "## 최종 구현\n" +
      "\n" +
      "이 문제는 Python의 `Counter` 클래스를 활용하면 코드가 간결해진다.\n" +
      "\n" +
      "```python\n" +
      "from sys import stdin\n" +
      "from collections import Counter\n" +
      "\n" +
      "input = stdin.readline\n" +
      "\n" +
      "def calculate_student_popularity():\n" +
      "    num_students = int(input())\n" +
      "    all_student_names = input().split()\n" +
      "\n" +
      "    # 각 학생의 인기도를 측정하는 Counter\n" +
      "    student_popularity = Counter()\n" +
      "\n" +
      "    # 학생들이 좋아하는 학생들의 이름을 입력받음\n" +
      "    for _ in range(num_students):\n" +
      "        liked_students = input().split()\n" +
      "        student_popularity.update(liked_students) # 카운트 업데이트\n" +
      "\n" +
      "    # 각 학생의 이름과 인기도를 쌍으로 만듦\n" +
      "    student_popularity_pairs = [(name, student_popularity[name]) for name in all_student_names]\n" +
      "\n" +
      "    # 인기도 내림차순, 같은 인기도는 이름 오름차순으로 정렬\n" +
      "    ranked_students = sorted(student_popularity_pairs, key=lambda pair: (-pair[1], pair[0]))\n" +
      "\n" +
      "    # 결과 출력\n" +
      "    for student_name, popularity_count in ranked_students:\n" +
      "        print(student_name, popularity_count)\n" +
      "\n" +
      "if __name__ == '__main__':\n" +
      "    calculate_student_popularity()\n" +
      "\n" +
      "```\n" +
      "\n" +
      "## 주의 사항 (실수할 수 있는 부분)\n" +
      "\n" +
      "### Counter 초기화\n" +
      "\n" +
      "처음 시도에서는 `Counter(student_names)` 와 같이 인기도를 초기화하고, 출력할 때 1을 빼고 출력했다.\n" +
      "\n" +
      "다만 그냥 빈 Counter 를 만들면 1을 빼줄 필요가 없으므로.. 코드가 더 의도에 맞게 되었다.\n" +
      "\n" +
      "```python\n" +
      "# 초기 방법\n" +
      "popularity = Counter(student_names)\n" +
      "# ..\n" +
      "print(student_name, popularity_count - 1) # 결과 출력\n" +
      "\n" +
      "# 올바른 방법\n" +
      "popularity = Counter()  # 빈 카운터로 시작\n" +
      "# ..\n" +
      "print(student_name, popularity_count) # 결과 출력\n" +
      "```\n" +
      "\n" +
      "### `Counter.most_common()` 메서드\n" +
      "\n" +
      "더 효율적인 풀이를 고민하다가.. `Counter.most_common()` 메서드를 알게 되었다. 이걸 쓰면 더 간단하지 않을까 생각했으나, 공식 문서에서 언급하기를\n" +
      "\n" +
      "> *Changed in version 3.7:* As a [`dict`](https://docs.python.org/3/library/stdtypes.html#dict) subclass, [`Counter`](https://docs.python.org/3/library/collections.html#collections.Counter) inherited the capability to remember insertion order. Math operations on *Counter* objects also preserve order. Results are ordered according to when an element is first encountered in the left operand and then by the order encountered in the right operand.\n" +
      "> \n" +
      "\n" +
      "Insertion order 가 유지된다고 한다. 하지만 우리는 입력 순서와 무관하게 키의 사전 순으로 정렬을 해야 하기 때문에 `most_common` 을 사용할 수는 없다.\n" +
      "\n" +
      "```python\n" +
      "# most_common()은 사전순 정렬을 해 주지 않음. 그냥 count 값으로 정렬할 뿐임\n" +
      "sorted_items = counter.most_common()\n" +
      "\n" +
      "# 직접 정렬하여 인기도 내림차순, 같은 인기도는 이름 오름차순 보장\n" +
      "sorted_items = sorted(counter.items(), key=lambda x: (-x[1], x[0]))\n" +
      "\n" +
      "```\n" +
      "\n" +
      "## 성능 분석\n" +
      "\n" +
      "이 알고리즘의 시간 복잡도는 다음과 같다.\n" +
      "\n" +
      "- 학생 이름 입력: O(n)\n" +
      "- 좋아하는 학생 목록 처리: O(n²). (한 학생이 자신을 제외한 모든 학생을 좋아하는 경우)\n" +
      "- 정렬: O(n log n)\n" +
      "- 결과 출력: O(n)\n" +
      "\n" +
      "결과적으로 전체 시간 복잡도는 O(n²)이 된다. 다만 모든 학생이 자신을 제외한 모든 학생을 좋아하는 경우가 많지 않을 경우 O(n log n) 이라고도 볼 수 있다.\n" +
      "\n" +
      "공간 복잡도는 모든 학생 이름과 인기도를 저장하기 위해 O(n)이 필요하다.",
    "author": {
      "name": "Joonseok Kim",
      "avatar": "https://avatars1.githubusercontent.com/u/55?v=4"
    }
  },
  {
    "id": "peak-element-in-mountain-array",
    "title": "이진 탐색을 활용한 문제 1",
    "slug": "peak-element-in-mountain-array",
    "category": "Self Improvement",
    "date": new Date("2025-04-22"),
    "excerpt":
      "이진 탐색을 응용한 문제 1번",
    "readTime": 5,
    "content": "https://leetcode.com/problems/peak-index-in-a-mountain-array\n" +
      "\n" +
      "## 문제 소개\n" +
      "\n" +
      "이 문제는 산 배열(Mountain Array)에서 피크(peak) 요소의 인덱스를 찾는 문제이다.\n" +
      "\n" +
      "산 배열(Mountain Array)이란 값이 증가하다가 피크에 도달한 후 감소하는 배열을 의미한다.\n" +
      "\n" +
      "이 문제의 요지는 ***로그 시간 복잡도***로 해결해야 하는 점이 중요한 제약 조건이다.\n" +
      "\n" +
      "## 문제 조건\n" +
      "\n" +
      "- 배열 길이: 3 ≤ arr.length ≤ 10^5\n" +
      "- 배열 요소 값: 0 ≤ arr[i] ≤ 10^6\n" +
      "- 입력 배열은 항상 산 배열(값이 증가했다가 감소하는 형태)\n" +
      "- ***시간 복잡도: O(log n)로 해결해야 함***\n" +
      "\n" +
      "## 예시\n" +
      "\n" +
      "입력:\n" +
      "\n" +
      "```\n" +
      "[0,1,0]\n" +
      "```\n" +
      "\n" +
      "출력:\n" +
      "\n" +
      "```\n" +
      "1\n" +
      "```\n" +
      "\n" +
      "입력:\n" +
      "\n" +
      "```\n" +
      "[0,2,1,0]\n" +
      "```\n" +
      "\n" +
      "출력:\n" +
      "\n" +
      "```\n" +
      "1\n" +
      "```\n" +
      "\n" +
      "입력:\n" +
      "\n" +
      "```\n" +
      "[0,10,5,2]\n" +
      "```\n" +
      "\n" +
      "출력:\n" +
      "\n" +
      "```\n" +
      "1\n" +
      "```\n" +
      "\n" +
      "## 문제 해법\n" +
      "\n" +
      "풀이는 두 가지다.\n" +
      "\n" +
      "### 방법 1: 선형 탐색 (O(n))\n" +
      "\n" +
      "가장 단순한 접근 방법은 배열을 처음부터 끝까지 순회하면서 증가하다가 감소하는 지점을 찾아내면 된다.\n" +
      "\n" +
      "```python\n" +
      "class Solution:\n" +
      "    def peakIndexInMountainArray(self, arr: List[int]) -> int:\n" +
      "        for i in range(1, len(arr) - 1):\n" +
      "            if arr[i - 1] < arr[i] > arr[i + 1]:\n" +
      "                return i\n" +
      "```\n" +
      "\n" +
      "하지만 이 방식은 최악 경우 O(n) 시간이 소요되므로 문제의 요구 사항인 O(log n)을 충족하지 못한다는 문제가 있다.\n" +
      "\n" +
      "### 방법 2: 이진 탐색 (O(log n))\n" +
      "\n" +
      "이진 탐색을 활용하면 O(log n) 시간 복잡도를 달성할 수 있다. 핵심 아이디어는 배열을 증가-감소 두 갈래로 나눌 수 있다는 점이다.\n" +
      "\n" +
      "- 상승 중(피크의 왼쪽)\n" +
      "- 하강 중(피크의 오른쪽)\n" +
      "\n" +
      "배열의 중간 지점(`mid`)과 그 다음 지점(`mid+1`)을 비교하여\n" +
      "\n" +
      "- `arr[mid] < arr[mid+1]`이면 상승 중이므로 피크는 오른쪽에 있다는 의미.\n" +
      "- `arr[mid] > arr[mid+1]`이면 하강 중이므로 피크는 현재 위치이거나 왼쪽에 있다는 의미이다.\n" +
      "\n" +
      "이와 같이 배열의 증가-감소를 판단하여 탐색 범위를 계속 절반으로 줄여나가면 결국 최고점에 도달하게 된다.\n" +
      "\n" +
      "## 최종 구현\n" +
      "\n" +
      "```python\n" +
      "class Solution:\n" +
      "    def peakIndexInMountainArray(self, arr: List[int]) -> int:\n" +
      "        left = 0\n" +
      "        right = len(arr) - 1\n" +
      "\n" +
      "        peak = left\n" +
      "\n" +
      "        while left <= right:\n" +
      "            mid = (right - left) // 2 + left\n" +
      "            if arr[mid] < arr[mid + 1]:\n" +
      "                left = mid + 1\n" +
      "            elif arr[mid - 1] > arr[mid]:\n" +
      "                right = mid - 1\n" +
      "            else:\n" +
      "                peak = mid\n" +
      "                break\n" +
      "\n" +
      "        return peak\n" +
      "```\n" +
      "\n" +
      "오버플로우를 방지하기 위해 `mid = (left + right) // 2` 대신 `mid = left + (right - left) // 2`를 사용한다.\n" +
      "\n" +
      "Python 에서는 전혀 문제가 없지만.. C 계열이나 Java 에서는 문제가 될 수 있을 것 같다.\n" +
      "\n" +
      "## 성능 분석\n" +
      "\n" +
      "### 시간 복잡도\n" +
      "\n" +
      "- 기본적인 이진 탐색 알고리즘을 사용하므로 시간 복잡도는 O(log n)이다.\n" +
      "- 각 단계에서 배열의 검색 범위가 절반으로 줄어들기 때문\n" +
      "    - T(n) = T(n/2) + O(1) (n ≥ 2)\n" +
      "    - T(n) = O(1) (n = 1)\n" +
      "\n" +
      "### 공간 복잡도\n" +
      "\n" +
      "- 공간 복잡도는 O(1) 이다.\n" +
      "    - 추가적인 자료구조를 사용하지 않으므로..",
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
