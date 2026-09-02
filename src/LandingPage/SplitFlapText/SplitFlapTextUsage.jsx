import SplitFlapText from "./SplitFlapText";

function SplitFlapTextUsage() {
 return(
    <SplitFlapText
          words={["SOLVE SMART","LEARN DAILY","SOLVE DAILY"]}
          flipDuration={0.12}
          stagger={0.06}
          cycleDelay={2400}
          charset="alphanumeric"
          flipsPerChar={8}
          tileColor="#111827"
          textColor="#f8fafc"
          tileRadius={8}
          gap={6}
          fontSize={52}
          loop
          padTo={11}
        />

 )
}
export default SplitFlapTextUsage