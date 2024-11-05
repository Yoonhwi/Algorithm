package programmers.LV1;

public class 지폐접기 {
        public static int solution(int[] wallet, int[] bill) {
            int answer = 0;

            int walletX = wallet[0];
            int walletY = wallet[1];

            int billX = bill[0];
            int billY = bill[1];

            //walletX가 billX보다 크고, walletY가 billY보다 커야 통과, 90도로 회전가능하므로
            //walletY가 billX보다 크고, walletX가 billY보다 커도 통과가능,

            while((billX > walletX || billY > walletY) && (billY > walletX || billX > walletY)){
                answer++;
                if(billX > billY){
                    billX /=2;
                }else{
                    billY /=2;
                }
            }
            return answer;
        }

        public static void main(String args[]){
            System.out.println("1번 testCase:"+solution(new int[]{30,15},new int[]{26,17}));
            System.out.println("2번 testCase:"+solution(new int[]{50,50},new int[]{100,241}));
        }
}


