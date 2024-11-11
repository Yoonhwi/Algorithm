package leetcode.easy;

public class leetcode13 {

    public static int romanToInt(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            System.out.println(count);
            switch (s.charAt(i)) {
                case 'I':
                    count += 1;
                    break;
                case 'V':
                    if (i > 0 && s.charAt(i - 1) == 'I') {
                        count += 3;
                    } else {
                        count += 5;
                    }
                    break;
                case 'X':
                    if (i > 0 && s.charAt(i - 1) == 'I') {
                        count += 8;
                    } else {
                        count += 10;
                    }
                    break;
                case 'L':
                    if (i > 0 && s.charAt(i - 1) == 'X') {
                        count += 30;
                    } else {
                        count += 50;
                    }
                    break;
                case 'C':
                    if (i > 0 && s.charAt(i - 1) == 'X') {
                        count += 80;
                    } else {
                        count += 100;
                    }
                    break;
                case 'D':
                    if (i > 0 && s.charAt(i - 1) == 'C') {
                        count += 300;
                    } else {
                        count += 500;
                    }
                    break;
                case 'M':
                    if (i > 0 && s.charAt(i - 1) == 'C') {
                        count += 800;
                    } else {
                        count += 1000;
                    }
                    break;
                default:
                    break;
            }
        }
        return count;
    }

    // import java.util.HashMap;
    // import java.util.Map;

    // public class leetcode13 {
    // public static int romanToInt(String s) {
    // Map<Character, Integer> romanValues = new HashMap<>();
    // romanValues.put('I', 1);
    // romanValues.put('V', 5);
    // romanValues.put('X', 10);
    // romanValues.put('L', 50);
    // romanValues.put('C', 100);
    // romanValues.put('D', 500);
    // romanValues.put('M', 1000);

    // int count = 0;
    // for (int i = 0; i < s.length(); i++) {
    // int current = romanValues.get(s.charAt(i));
    // // 다음 문자 값이 현재 문자 값보다 크다면 감산
    // if (i < s.length() - 1 && current < romanValues.get(s.charAt(i + 1))) {
    // count -= current;
    // } else {
    // count += current;
    // }
    // }
    // return count;
    // }
    // }

    public static void main(String args[]) {
        System.out.println("1번 testCase:" + romanToInt("MCMXCIV"));
    }

}
