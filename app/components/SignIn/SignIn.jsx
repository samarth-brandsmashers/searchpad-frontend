import React from "react";
import Image from "next/image";
import styles from "@/styles/SignIn/SignIn.module.css";
import googleImg from "@/public/SignUp/googlelogo.png";
import appleImg from "@/public/SignUp/applelogo.png";
import microsoftImg from "@/public/SignUp/microsoft-iconlogo.png";
import emailIcon from "@/public/SignUp/elements.png";
import girl from "@/public/SignIn/Frame.png";
const SignIn = () => {
  return (
    <>
      <div className={styles.mainHead}>
        <div className={styles.logo}>
          <Image
            src="/logo.png" 
            alt="Logo"
            width={159.03} 
            height={58.29} 
            layout="responsive"
          />
        </div>
        <div className={styles.Container}>
          <div className={styles.CreateAc}>
            <div style={styles.createContent}>
              <h1 className={styles.CreateH1}>Welcome back</h1>
              <p className={styles.createPara}>
              Searchpad the ultimate all-in-one AI solution!
              </p>
            </div>
            <div className={styles.allbtn}>
              <button>
                <Image
                  src={googleImg}
                  alt="Google Icon"
                  width={15}
                  height={15}
                />{" "}
                Sign up with Google
              </button>
              <button>
                <Image src={appleImg} alt="Apple Icon" width={15} height={15} />{" "}
                Sign up with Apple
              </button>
              <button>
                <Image
                  src={microsoftImg}
                  alt="Microsoft Icon"
                  width={10}
                  height={10}
                />{" "}
                Sign up with Microsoft
              </button>
            </div>
            <div className={styles.orContainer}>
              <div className={styles.line}></div>
              <p>OR</p>
              <div className={styles.line}></div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.icon}>
                <Image
                  src={emailIcon}
                  alt="Email Icon"
                  width={15}
                  height={15}
                />
              </div>
              <input
                type="email"
                placeholder="Email Address*"
                className={styles.emailInput}
              />
            </div>
            <button className={styles.signupbtn}>Sign up with Google</button>
            <p className={styles.termsText}>
              By proceeding, you agree to our{" "}
              <a href="/terms" className={styles.link}>
                Terms
              </a>{" "}
              and <br /> acknowledge our{" "}
              <a href="/privacy-policy" className={styles.link}>
                Privacy Policy
              </a>
              .
            </p>
            <hr className={styles.hrline} />
            <div className={styles.signInText}>
              <span>Already have an account? </span>
              <a href="/signin" className={styles.signInLink}>
                Sign In
              </a>
            </div>
          </div>

          <div className={styles.rightsection}>
            <div className={`${styles.bigCard}  mx-auto`}>
              <div className={`${styles.bigCardDivTwo}`}>
                <div className={`${styles.bigCardDivinnerIOne}`}>
                  <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
                    Instant content creation <br />
                    tools at your fingertips
                  </h3>
                  <p className="text-[0.875rem] text-[#c8c8c8]">
                    Create content with ease and let AI do the heavy <br />{" "}
                    lifting for you. Searchpad is designed to provide <br />{" "}
                    fast and high-quality results for all your content <br />{" "}
                    needs.
                  </p>
                  <div className={`${styles.innerOneA}`}>
                  <div className={`${styles.innerOneAboxes} ${styles.button}`}>
      <p>Image Creation</p>
    </div>
                    <div className={`${styles.innerOneAboxes}`}>
                      <p>Video Creation</p>
                    </div>
                    <div className={`${styles.innerOneAboxes}`}>
                      <p>Graphic Design</p>
                    </div>
                    <div className={`${styles.innerOneAboxes}`}>
                      <p>Ad Creatives</p>
                    </div>
                    <div className={`${styles.innerOneAboxes}`}>
                      <p> Data Visualization</p>
                    </div>
                    <div className={`${styles.innerOneAboxes}`}>
                      <p>And More</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.bigCardDivinnerITwo}`}>
                  <Image src={girl} alt="robo" className={` rounded-[8px] `} />
                </div>
              </div>
            </div>




















            
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
