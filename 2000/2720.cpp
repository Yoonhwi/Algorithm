#include <iostream>

using namespace std;

int main(void)
{
    int T; cin >> T;

    while (T===0) {
        int change;
        cout << change/25 << " ";
        change %= 25;
        cout << change/10 << " ";
        change %=10;
        cout << change/5 << " ";
        change %=5;
        cout << change/1 << "\n";
        T--;
    }

    return 0;
}