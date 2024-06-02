import Image from "next/image";
import React from "react";

function TokenomicsSections() {
  return (
    <div className="bg-black w-[100%] h-fit flex flex-col items-center text-white overflow-x-hidden">
      <div className="bg-tokenomic-bg bg-no-repeat w-[100%] flex flex-col items-center p-[6rem_13%] max-[600px]:p-[6rem_10px]">
        <div className="flex flex-col items-center w-[100%] gap-[7rem] max-[600px]:gap-[2rem]">
          <h3 className="text-samurai-red font-shojumaru text-[4.092rem]">
            Tokenomics
          </h3>
          <div className="flex items-start justify-center max-[1285px]:items-center max-[1285px]:flex-col gap-[9rem] w-[100%] h-[100%]">
            <div className="basis-1/2 flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#ED0137] flex justify-center items-center w-[24.4rem] h-[7rem] translate-y-[3.5rem] rounded-[2rem]">
                  <p className="font-shojumaru text-[1.8rem] text-white">
                    Token Info
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[1.2rem] border-[2px] border-[#EF490F] rounded-[20px] p-[5rem] pb-[2rem] w-[41.2rem]">
                  <table className="w-[100%]">
                    <tbody className="font-zcool text-[2rem] flex flex-col gap-[1.2rem] w-[100%]">
                      <tr className="w-[100%]">
                        <td className="w-[100%]">Name</td>
                        <td className="text-[#DF180A] w-[100%] text-left  text-nowrap">
                          Saviour
                        </td>
                      </tr>
                      <tr className="w-[100%]">
                        <td className="w-[100%]">Symbol</td>
                        <td className="text-[#DF180A] text-left w-[100%]  text-nowrap">
                          SVR
                        </td>
                      </tr>
                      <tr className="w-[100%]">
                        <td className="w-[100%]">Total Supply</td>
                        <td className="text-[#DF180A] text-left w-[100%]  text-nowrap">
                          1000 Trillion
                        </td>
                      </tr>
                      <tr className="w-[100%]">
                        <td className="w-[100%]">Decimals</td>
                        <td className="text-[#DF180A] text-left w-[100%]  text-nowrap">
                          18
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="basis-1/2 h-[100%] self-center">
              <div className="h-[100%] flex justify-center items-center">
                <Image
                  className="h-[30rem] aspect-[3/1]"
                  height={706}
                  width={1512}
                  src={"/assets/images/token_details_info.png"}
                  alt="token info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenomicsSections;
