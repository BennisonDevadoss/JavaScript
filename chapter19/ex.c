#include <stdio.h>
int main()
{
    if (0.1 + 0.2 == 0.3)
    {
        printf("Good\n");
    }
    else
    {
        printf("Bad\n"); // C programming also tells the above if condition fails.
    }

    // but this way it gives the true.
    float a = 0.1;
    float b = 0.2;
    float c;

    c = a + b;
    if (c == a + b)
    {
        printf("Now the condition works well.\n");
    }
    else
    {
        printf("Now the conditon don't works\n");
    }
}

//<-----------------------------><----------------------------><-------------------------------> ><----------------------------->//