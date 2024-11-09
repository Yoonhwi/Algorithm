package leetcode.medium;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class leetcode17 {
    public static List<String> letterCombinations(String digits) {
        Map<String, String[]> phone = new HashMap<>();
        phone.put("2", new String[] { "a", "b", "c" });
        phone.put("3", new String[] { "d", "e", "f" });
        phone.put("4", new String[] { "g", "h", "i" });
        phone.put("5", new String[] { "j", "k", "l" });
        phone.put("6", new String[] { "m", "n", "o" });
        phone.put("7", new String[] { "p", "q", "r", "s" });
        phone.put("8", new String[] { "t", "u", "v" });
        phone.put("9", new String[] { "w", "x", "y", "z" });
    }

    public static void main(String[] args) {
        System.out.println(letterCombinations("23"));
        System.out.println(letterCombinations("2"));
    }
}
