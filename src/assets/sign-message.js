/*
 * JavaScript client-side example using jsrsasign
 */

// #########################################################
// #             WARNING   WARNING   WARNING               #
// #########################################################
// #                                                       #
// # This file is intended for demonstration purposes      #
// # only.                                                 #
// #                                                       #
// # It is the SOLE responsibility of YOU, the programmer  #
// # to prevent against unauthorized access to any signing #
// # functions.                                            #
// #                                                       #
// # Organizations that do not protect against un-         #
// # authorized signing will be black-listed to prevent    #
// # software piracy.                                      #
// #                                                       #
// # -QZ Industries, LLC                                   #
// #                                                       #
// #########################################################

/**
 * Depends:
 *     - jsrsasign-latest-all-min.js
 *     - qz-tray.js
 *
 * Steps:
 *
 *     1. Include jsrsasign 8.0.4 into your web page
 *        <script src="https://cdn.rawgit.com/kjur/jsrsasign/c057d3447b194fa0a3fdcea110579454898e093d/jsrsasign-all-min.js"></script>
 *
 *     2. Update the privateKey below with contents from private-key.pem
 *
 *     3. Include this script into your web page
 *        <script src="path/to/sign-message.js"></script>
 *
 *     4. Remove or comment out any other references to "setSignaturePromise"
 */
import qz from "qz-tray";
var privateKey = "-----BEGIN PRIVATE KEY-----\n" +
   "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2Sr3EygNF8TgW\n" +
   "WQY7+65njlAkpiEk/P8TwGVB5AnylNqsmRGxzkX99waXfhqI/yiMSXtpaKqgYR0Z\n" +
   "1N+MVX1cel9anCG6ptQ3vvL5Trll19uj1o7MjBefz/KOgXZutWefF63KKmq7zHSC\n" +
   "z+MQCbtvqgsZSm4kAnjPJ93OehcVNB/61oT3EAs7hDZgfuhu7TzOP3kWXcCgm4Rg\n" +
   "WxnV2WOFt9K5e78o4ndV0LEWRRiG1+Ua7xm2SPT2BYj3T0MYZ9oO1QMdNHyi0gxY\n" +
   "gw/1gxIB8ee3HwAjKKkeFh9EDA6DvTTMDQGb6n2rEDIEMCqb4T7zsYflgTRmyG4A\n" +
   "P80Kyma3AgMBAAECggEAHd3SCLd2YNO8NkEgudwq/3F8JP0JCiffXOuVS33iuVl1\n" +
   "GHk9wm2C3zDFZjW1gEOZ754sd6E772np3C0Z8UKidu/fxpc1GYEy3O1OntUsoAiF\n" +
   "RmslW1MKndbyrTF953aWQyUchrZ7ZUiCwFnyIFMP4CQyjFK7B/BVvc8Q0r8DIChy\n" +
   "tbf3JYiZoSQUwlfxgO3QGi6IDMMtY/FGxjUL2yvYty6Cb0PQ0EcYFxgcrnZHlvy0\n" +
   "0ltXIk/13DiQHYrv2qB8H5e4gbj2SraZq+pqOmbchAa3nyipqp20X1ZQYgw3fuRR\n" +
   "b7A+ZZdQ8MtyKt8TXFNrNYEue0n9HiW3fKabl4Yw1QKBgQDK6MQDVrBw6aAthprw\n" +
   "85SywBdLhMCclHZli4biQXDQj+WRnbCJIACXFvDiUfLJdtLnAYKNZEMlbZ8jrb+z\n" +
   "JDUgJd5L2pjMSs613JocCNZqRT9F4M8P6MXndxysZ/nlvfDnKzxts8lt/b4ZzbPM\n" +
   "53IHhLa4TcqiQhXEuJMZfL+YIwKBgQDl/P34T3LsL7uHqrP3FF25XoYoB9DBIB7P\n" +
   "JBU+Z7lvkQyRe/cT8Fn4OdCjRyRH/8OrwrU92pLamlrG2E/Ds2NtxQ/Xtcav3N+T\n" +
   "+7YSPlqYGYID9eVMeg7bnWXEoMMrtunSxZkhxMdeO5MitSCCrHbzy+e/9ARVLUv4\n" +
   "0afze7B2XQKBgCBCHx90wbpBuiBivPE/mE1OsqVj5oc+JxB/vSLtSnUt205qJm22\n" +
   "c8GReRxR8OpMhL0LBWlbHj2uDtXKQqbFQ9jnjE684vvfjLtm5e09DnF4rtV6JxEd\n" +
   "bZEd46YZJaZ7qvflbMb4BTcCVx2dEU+rH/rIA5CLdYKURQewXFp59a/HAoGACh4G\n" +
   "Ah1kndU/t6kfv5fKw7PPzQUC/uvtzwj0Ukl309uapO/CH8NsAcpxTi18ABrVPcIT\n" +
   "/QOXgDxYD/VGFQLYNeT8XG3nrqbVwwnIqabKj3RXztrLWoDoFGspJew4ibzDLn14\n" +
   "zg59Ar02LMmxA26Y0QLAUCZo5mJWvDxk2gYv7hUCgYAeT9tw3wvL11xWFGEHkXP0\n" +
   "cnCYL+DjmG1+VHUDYMOSpJykGK+3Bf2b1rJ5DB/BLGCWEg4/z/3iGZhb2TGB4U9X\n" +
   "kAZ3EDu3kmUxawzhVbzflRscxw41iRb3/hiNn/H8VoTA6Hinjd3gp142TZcvwHJE\n" +
   "PDD2s6JccGNf2ouLpBFk2g==\n" +
   "-----END PRIVATE KEY-----";

qz.security.setSignatureAlgorithm("SHA512"); // Since 2.1
qz.security.setSignaturePromise(function(toSign) {
    return function(resolve, reject) {
        try {
            var pk = KEYUTIL.getKey(privateKey);
            var sig = new KJUR.crypto.Signature({"alg": "SHA512withRSA"});  // Use "SHA1withRSA" for QZ Tray 2.0 and older
            sig.init(pk); 
            sig.updateString(toSign);
            var hex = sig.sign();
            console.log("DEBUG: \n\n" + stob64(hextorstr(hex)));
            resolve(stob64(hextorstr(hex)));
        } catch (err) {
            console.error(err);
            reject(err);
        }
    };
});
