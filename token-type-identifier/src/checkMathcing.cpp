#include <iostream>
#include <string>
#include <chrono>
using namespace std;
string gen_random(const int len);

int main(){

  string addrList[100000] = {};
  for (int i=0; i<100000; i++){
    addrList[i] = gen_random(40);
  }

  chrono::steady_clock::time_point begin = std::chrono::steady_clock::now();
  // start  
  string totalcode = "";
  string code ="0x5cf5402600000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000006bb1fb4377457c00000000000000000000000095ad61b0a150d79219dcf64e1e6cc01f0b64c4ce0000000000000000000000000000000000000000000000000001167c12c850dd0000000000000000000000000000000000000000000000000000000000000128d9627aa40000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000006bb1fb4377457c00000000000000000000000000000000000000000003325e2599dbfdd31fba8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000095ad61b0a150d79219dcf64e1e6cc01f0b64c4ce869584cd000000000000000000000000be5998d3d0e9409474ef18abc30436574604b0c50000000000000000000000000000000000000000000000ff3ee6c78563121345000000000000000000000000000000000000000000000000";
  for (int i=0; i<700; i++){
    totalcode += code;
  }


  for (int i=0; i<100000; i++){
    if (totalcode.find(addrList[i])!=string::npos){
      cout<<"find";
    }
    // else {
    //   cout<<i;
    // }
  }
  chrono::steady_clock::time_point end = std::chrono::steady_clock::now();
  cout<<chrono::duration_cast<chrono::milliseconds>(end - begin).count();

  return 0;
}

string gen_random(const int len) {
    static const char alphanum[] =
        "0123456789"
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        "abcdefghijklmnopqrstuvwxyz";
    std::string tmp_s;
    tmp_s.reserve(len);

    for (int i = 0; i < len; ++i) {
        tmp_s += alphanum[rand() % (sizeof(alphanum) - 1)];
    }
    
    return tmp_s;
}
