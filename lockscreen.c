// lockscreen.c
// courtesy of https://stackoverflow.com/questions/1976520/lock-screen-by-api-in-mac-os-x/26492632#26492632
extern void SACLockScreenImmediate ( );

int main()
{
    SACLockScreenImmediate();
    return 0;
}