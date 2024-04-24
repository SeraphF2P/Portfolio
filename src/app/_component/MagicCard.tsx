"use client";

import { useScrollLock } from "@mantine/hooks";
import { Portal } from "@radix-ui/react-portal";
import { AnimatePresence, Variants, motion as m } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "~/configs/site";
import { cn } from "~/lib/cva";
import { Icon, NextImage } from "~/ui/server";

type MagicCardProps = (typeof siteConfig.projects.react | typeof siteConfig.projects.next)[number];

export const MagicCard = (props: MagicCardProps) => {
  const [isFliped, setisFliped] = useState<boolean>();
  const [isOpening, setisOpening] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);
  const scale = 1.1
  const aspectRatio = 5 / 7;
  const flipCardStart = async () => {
    if (isAnimating || isOpening) return;
    setisAnimating(true);
    setisFliped((prev) => !prev);
  };
  const flipAnimation: Variants = {
    initial: { rotateY: -180, x: 0 },
    flip: {
      rotateY: 0,
      x: [0, -100, 0],
      transition: { duration: 0.5, ease: "linear" },
    },
    exit: {
      rotateY: 180,
      x: [0, -100, 0],
      transition: { duration: 0.5, ease: "linear" },
    },
  };

  useScrollLock(isFliped);
  return (
    <>
      <div
        onPointerDown={flipCardStart}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        className="relative    h-[268.8px] w-48 select-none  "
      >
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            if (isFliped) {
              setisOpening(true);
            }
          }}
          presenceAffectsLayout={true}
          initial={false}
        >
          {isFliped ? (
            <m.div
              variants={flipAnimation}
              key="cardFrontFace"
              initial={"initial"}
              animate={"flip"}
              exit={"exit"}
              className="relative size-full   backface-hidden "
            >
              
              {isOpening ? (
                <Portal>
                  <div
                    onPointerDown={() => {
                      setisOpening(false);
                      setTimeout(() => setisFliped(false));
                      setTimeout(() => setisAnimating(false));
                    }}
                    className=" fixed inset-0 z-40 flex  items-center justify-center "
                  >
                    <m.div
                      animate={{ scale: scale / aspectRatio }}
                      transition={{type:"keyframes",ease:"linear"}}
                      layoutId="main_content"
                    >
                      <InnerContent {...props} />
                    </m.div>
                  </div>
                </Portal>
              ) : (
                <m.div layoutId="main_content">
                  <InnerContent {...props} />
                </m.div>
              )}
            </m.div>
          ) : (
            <m.div
              variants={flipAnimation}
              key="cardBackFace"
              initial={"initial"}
              animate={isFliped === undefined ? false : "flip"}
              exit={"exit"}
              className="group relative grid  size-full cursor-pointer   overflow-hidden  rounded-md border-2 border-[gold]  bg-black shadow shadow-neutral-revert backface-hidden"
            >
              <Startbackground />
              <h3 className=" isolate m-auto  bg-neutral/60 ">{props.name}</h3>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
const Startbackground = () => (
  <svg
    className="absolute  left-0 top-1/2  origin-center  -translate-y-1/2 scale-150 transition-transform duration-300 ease-linear "
    viewBox="0 0 800 800"
  >
    <defs>
      <symbol id="bbburst-shape-4" viewBox="0 0 149 143">
        <path d="M71.647 2.781c.898-2.764 4.808-2.764 5.706 0l15.445 47.534a3 3 0 0 0 2.853 2.073h49.98c2.906 0 4.115 3.719 1.764 5.427L106.96 87.193a2.999 2.999 0 0 0-1.09 3.354l15.445 47.534c.898 2.764-2.266 5.062-4.617 3.354l-40.435-29.378a3 3 0 0 0-3.526 0l-40.435 29.378c-2.351 1.708-5.515-.59-4.617-3.354L43.13 90.547a3 3 0 0 0-1.09-3.354L1.605 57.815c-2.35-1.708-1.142-5.427 1.764-5.427h49.98a3 3 0 0 0 2.853-2.073L71.647 2.781Z"></path>
      </symbol>
      <symbol id="bbburst-shape-12" viewBox="0 0 170 151">
        <path
          d="M69.3728 54.2122 85 10.0031l15.627 44.2091c1.413 3.9958 5.19 6.6672 9.428 6.6673h49.312l-39.149 26.1447c-3.803 2.5401-5.399 7.3367-3.875 11.6488l15.179 42.94-40.9683-27.36c-3.3621-2.245-7.7453-2.245-11.1074 0l-40.9682 27.36 15.1785-42.94c1.5243-4.3121-.0712-9.1087-3.8746-11.6488L10.6333 60.8795h49.3112c4.2381-.0001 8.0159-2.6715 9.4283-6.6673Z"
          strokeWidth="12"
        ></path>
      </symbol>
    </defs>
    <use
      xlinkHref="#bbburst-shape-4"
      width="34.024936656938316"
      opacity="0.19126544708466786"
      transform="matrix(0.9025811704456144,-0.4305197216818584,0.4305197216818584,0.9025811704456144,131.0080568884852,-308.3811155069121)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="54.49744713832726"
      opacity="0.34257917816160943"
      transform="matrix(0.8522066368172863,0.5232053594570395,-0.5232053594570395,0.8522066368172863,305.4405702600945,138.6465100990314)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="35.29929074074917"
      opacity="0.7042706551615904"
      transform="matrix(0.9486089127222906,0.3164508345759788,-0.3164508345759788,0.9486089127222906,616.7084613431748,94.23749870311036)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="40.592123223738824"
      opacity="0.3640816279333785"
      transform="matrix(0.9403316836870329,0.3402592021596329,-0.3402592021596329,0.9403316836870329,384.59066955078316,270.5566276662993)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="46.74671208888466"
      opacity="-0.05104408168380492"
      transform="matrix(0.9820672740964371,0.1885308175041776,-0.1885308175041776,0.9820672740964371,105.34999170363557,-318.4736738391653)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="34.06387156721914"
      opacity="0.5079750313624298"
      transform="matrix(0.7866446920551236,0.6174059673031188,-0.6174059673031188,0.7866446920551236,823.2924324250928,188.95122592469102)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="45.877519585545464"
      opacity="-0.04403350561469743"
      transform="matrix(0.9977025563321066,0.06774665370613955,-0.06774665370613955,0.9977025563321066,749.0372559675124,-319.81989689302776)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="38.4372689526176"
      opacity="0.06853842265975552"
      transform="matrix(0.9132136188131011,0.40748114853853057,-0.40748114853853057,0.9132136188131011,768.6469649867818,-327.8611577799838)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="46.29817645130144"
      opacity="0.20314192739566883"
      transform="matrix(0.960486149897449,0.2783277849140742,-0.2783277849140742,0.960486149897449,565.4527512357377,-340.9569344553562)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="33.20879158524568"
      opacity="0.14610011681778245"
      transform="matrix(0.952369379421471,-0.3049468234633085,0.3049468234633085,0.952369379421471,620.1274775840988,-115.68359867282044)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="47.32004021296201"
      opacity="0.11837063801639969"
      transform="matrix(0.9836408331343226,0.18014080989830103,-0.18014080989830103,0.9836408331343226,94.9400056776565,181.5884036284242)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="47.642435136433036"
      opacity="0.15346963080020193"
      transform="matrix(0.9597141337763536,0.28097825793093517,-0.28097825793093517,0.9597141337763536,137.17306111670894,-135.3751215870808)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="27.377791200282193"
      opacity="0.7440961465727123"
      transform="matrix(0.9172208416795312,0.39837912544295334,-0.39837912544295334,0.9172208416795312,491.95999134542114,-73.5868284043097)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="44.511993483498415"
      opacity="0.20105968071601954"
      transform="matrix(0.9654755545347365,0.26049367285184305,-0.26049367285184305,0.9654755545347365,408.9307781387118,359.9249265983316)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="52.026114678563474"
      opacity="0.46295569794706315"
      transform="matrix(0.995589901002486,0.09381230741144846,-0.09381230741144846,0.995589901002486,223.9614522411029,151.64626177914278)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="37.90880177745161"
      opacity="0.5722822018719997"
      transform="matrix(0.9972418662879186,0.07422034844022989,-0.07422034844022989,0.9972418662879186,221.64401919316907,35.254440102807905)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="27.514019319611098"
      opacity="0.8731066142139235"
      transform="matrix(0.999222515541835,-0.039425428776960286,0.039425428776960286,0.999222515541835,360.1084438733059,57.02972577448668)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="42.71829899745197"
      opacity="0.33901998837641434"
      transform="matrix(0.9243487124493527,0.3815487620124377,-0.3815487620124377,0.9243487124493527,387.88704256993265,-237.65416024163466)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="35.38853971746807"
      opacity="0.7203607357710484"
      transform="matrix(0.9399946803614754,0.34118909843681655,-0.34118909843681655,0.9399946803614754,627.6454090210349,-46.90020232009783)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="40.05116217797806"
      opacity="0.3814077682725254"
      transform="matrix(0.986104667179636,-0.1661252099066828,0.1661252099066828,0.986104667179636,585.8446854987758,-50.10683199756835)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="45.36939575817147"
      opacity="-0.05742668021853814"
      transform="matrix(0.7105051112354255,0.7036920398216365,-0.7036920398216365,0.7105051112354255,326.20158577526,433.48066085681853)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="30.17738890044396"
      opacity="0.6332222856992367"
      transform="matrix(0.8052415315145345,0.5929469419131251,-0.5929469419131251,0.8052415315145345,473.13189618884746,4.373741536239834)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="49.20364983874309"
      opacity="0.22899309813339797"
      transform="matrix(0.9998324627092631,-0.01830427580457768,0.01830427580457768,0.9998324627092631,97.80689664304137,-216.98840711997784)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="51.849076837120606"
      opacity="0.08501924195921673"
      transform="matrix(0.908002372662878,0.4189650238845531,-0.4189650238845531,0.908002372662878,318.73057933810185,-318.6537355904921)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="38.217649678892805"
      opacity="0.6589540869936565"
      transform="matrix(0.9633655287939707,0.26819183047123757,-0.26819183047123757,0.9633655287939707,534.2452754019752,-137.15230213949997)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="40.81070345551032"
      opacity="0.30801670615917087"
      transform="matrix(0.9993547168731413,-0.03591865620264383,0.03591865620264383,0.9993547168731413,376.367035329916,312.22174740534166)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="31.52789435858416"
      opacity="0.9025641495902962"
      transform="matrix(0.9749984096915729,-0.22221183834103825,0.22221183834103825,0.9749984096915729,305.5781195397718,-29.1993750730324)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="34.075188146120645"
      opacity="0.7011408026105835"
      transform="matrix(0.8928387927346193,-0.45037638724536566,0.45037638724536566,0.8928387927346193,219.92873367298583,184.09403172889506)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="41.67160116369633"
      opacity="0.4961166520952649"
      transform="matrix(0.8923669257657518,-0.4513106134353381,0.4513106134353381,0.8923669257657518,182.74045264691563,278.5096277509681)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="40.820655720854774"
      opacity="0.10282959107930134"
      transform="matrix(0.7970112619659538,0.6039644429098767,-0.6039644429098767,0.7970112619659538,422.92060543692224,418.11191201085427)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="41.583650005831856"
      opacity="0.5014543436648399"
      transform="matrix(0.7962731304582854,0.6049372708886125,-0.6049372708886125,0.7962731304582854,803.899842900135,-66.95150927374999)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="29.659260820341558"
      opacity="0.20828221454785245"
      transform="matrix(0.9999273869633715,-0.01205075933723288,0.01205075933723288,0.9999273869633715,736.2081346512974,17.35167954138103)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="48.4679013814576"
      opacity="0.21358561908795803"
      transform="matrix(0.716421075808444,0.6976681461393172,-0.6976681461393172,0.716421075808444,307.95006376489357,107.25364393543191)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="35.8949883552746"
      opacity="0.3544793500093417"
      transform="matrix(0.9007559594773565,0.4343255708175917,-0.4343255708175917,0.9007559594773565,665.2523123063272,301.7119378929052)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="37.15365471113576"
      opacity="0.6060322826147968"
      transform="matrix(0.9433504180101057,0.3317981145819834,-0.3317981145819834,0.9433504180101057,431.63691283007313,172.8931472927307)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="41.16350877560785"
      opacity="0.2776804022812841"
      transform="matrix(0.9713575287164198,0.23762270810242395,-0.23762270810242395,0.9713575287164198,664.5273620946809,-257.5016024988869)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="28.87935054176783"
      opacity="0.17064049618151556"
      transform="matrix(0.8516690049579166,-0.5240800568558129,0.5240800568558129,0.8516690049579166,265.7455022483391,429.61598601256446)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="42.24715222004133"
      opacity="0.21472616587913573"
      transform="matrix(0.9939846220230095,-0.10951972964619179,0.10951972964619179,0.9939846220230095,78.0517523412044,247.03580286304435)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="37.39355120306313"
      opacity="0.5606465783177856"
      transform="matrix(0.999638251135905,0.02689548040004827,-0.02689548040004827,0.999638251135905,482.84170662563326,175.3141867200037)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="35.9633238329141"
      opacity="0.5828550087893034"
      transform="matrix(0.8959596077641738,0.44413554378710535,-0.44413554378710535,0.8959596077641738,749.2363666718747,35.360844353149616)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="37.528676888124224"
      opacity="0.8184099217481883"
      transform="matrix(0.9303174954910115,0.3667551739012442,-0.3667551739012442,0.9303174954910115,448.1691610953781,10.925107849078131)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="37.85005619064755"
      opacity="0.7236963156007803"
      transform="matrix(0.9393389863515076,-0.3429901874983048,0.3429901874983048,0.9393389863515076,144.94154647314218,104.54538908626552)"
      fill="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="50.80767082560425"
      opacity="0.345720426642779"
      transform="matrix(0.7459088872262826,-0.666047995235215,0.666047995235215,0.7459088872262826,394.6698862394637,209.21219479329238)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="31.042560581135973"
      opacity="0.11403421049204576"
      transform="matrix(0.9953556488394667,-0.09626594581348144,0.09626594581348144,0.9953556488394667,703.4314663309535,180.08823476314245)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="38.099181206873986"
      opacity="0.23132511809489997"
      transform="matrix(0.9829059547556296,0.18410834882189434,-0.18410834882189434,0.9829059547556296,734.6655184302286,-200.2037749175894)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="37.68957146143204"
      opacity="0.10231632608427899"
      transform="matrix(0.972642700745745,-0.23230621318859113,0.23230621318859113,0.972642700745745,501.3023746089493,358.87382177691484)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="33.65017833719744"
      opacity="0.19627664427515368"
      transform="matrix(0.855491588668528,0.5178167066804604,-0.5178167066804604,0.855491588668528,867.743080440877,283.9770573270405)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="31.418542844282424"
      opacity="0.842951945969886"
      transform="matrix(0.9036912515930909,-0.428184681877006,0.428184681877006,0.9036912515930909,283.40512877178656,61.16114730884868)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="37.66962129910761"
      opacity="0.5614144233756146"
      transform="matrix(0.9446410461846971,0.3281056138853479,-0.3281056138853479,0.9446410461846971,450.4842772812968,-171.05761254015795)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="46.69476491069793"
      opacity="-0.062499534659483214"
      transform="matrix(0.986542797690486,-0.1635032364359459,0.1635032364359459,0.986542797690486,653.6194330019282,343.17206613310975)"
      fill="none"
      stroke="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="35.13335054466164"
      opacity="0.39369799797648597"
      transform="matrix(0.8887050453234611,-0.4584793805795688,0.4584793805795688,0.8887050453234611,193.0127151350535,-220.11831603826624)"
      fill="#ffd700"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="31.244520963496427"
      opacity="0.37078619156681747"
      transform="matrix(0.9998468469382334,-0.017500933337190504,0.017500933337190504,0.9998468469382334,563.0452613215152,214.05298981148565)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="43.34092288164319"
      opacity="0.40328028462941923"
      transform="matrix(0.9997234926298253,0.023514639780862764,-0.023514639780862764,0.9997234926298253,125.69114003821024,-59.07598704327478)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-12"
      width="48.02618249874502"
      opacity="0.47514746974865585"
      transform="matrix(0.7906745620928705,0.6122366673593207,-0.6122366673593207,0.7906745620928705,446.37920275216777,-84.44491775770615)"
      fill="none"
      stroke="#ffffff"
    ></use>
    <use
      xlinkHref="#bbburst-shape-4"
      width="44.189788697793574"
      opacity="0.44640701835480334"
      transform="matrix(0.7447814115153495,0.6673085111559747,-0.6673085111559747,0.7447814115153495,746.8453451741682,-142.3339382057186)"
      fill="#ffd700"
    ></use>
  </svg>
);
type InnerContentType = MagicCardProps & { className?: string };
const InnerContent = (props: InnerContentType) => {
  const tecs = [...props.tec].sort((a, b) => {
      return a.length - b.length
    })

  return (
    <div
      onPointerDown={e=>e.stopPropagation()}
      className={cn(
        "relative  grid  aspect-[5/7]  w-48 grid-flow-row  grid-rows-[1fr_1fr_1fr]    overflow-hidden rounded-md border-2 border-[gold]  bg-neutral  shadow-inner shadow-black backface-hidden  ",
        props.className
      )}
    >
      <NextImage
        className=" aspect-video w-full "
        sizes="312px 175.5px"
        src={"/" + props.image}
        alt={`${props.name} project image`}
      />
        <div className="   flex flex-wrap content-baseline items-center pt-2 px-2  gap-1 overflow-y-scroll  scrollbar ">
          {tecs.map((tec) => {
            return (
              <span
                key={tec}
                className="     rounded-sm bg-white  text-primary   "
              >
                <p className=" bg-primary/30 px-1  py-0.5 text-xs bg-blend-color">
                  {tec}
                </p>
              </span>
            );
          })}
        </div>

        <div className=" flex w-full    items-center justify-center gap-10 p-4   ">
          <Link href={props.urls.github}>
            <Icon.github className=" size-8" />
          </Link>
          <Link href={props.urls.live}>
            <Icon.globe className=" size-8" />
          </Link>
        </div>
    </div>
  );
};
