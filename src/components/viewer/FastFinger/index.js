import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import Notification from "./Notification";
import { mainColor, secondaryColor } from "../../../constants/constants";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Button, TextField } from "@mui/material";
import Background from "assets/images/background2024.png";

// import Icon from "assets/images/Asset 7.svg";
import Icon from "assets/images/Fastfinger.png"

const useStyles = makeStyles(() => ({
  container: {
    overflow: "hidden",
    position: "fixed",
    top: "50%",
    left: "50%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    transform: "translate(-50%, -50%)",
    padding: 40,
    zIndex: "0  ",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  textContainer: {
    width: "960px",
    height: "222px",
    color: "#aaa",
    fontSize: "2em",
    overflow: "scroll",
  },
  text: {
    fontSize: "1.2em",
    lineHeight: "2em",
    wordSpacing: "4px",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    width: 1020,
    justifyContent: "space-between",
    gap: 20,
  },
  inputText: {
    width: "70%",
    height: "50%",
  },
  timer: {
    minWidth: "10%",
    minHeight: "100%",
    backgroundColor: mainColor,
    borderRadius: "10px",
    color: "#fff",
    fontSize: "2em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    minWidth: "10%",
    minHeight: "100%",
    backgroundColor: mainColor,
    borderRadius: "10px",
    fontSize: "2em",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },
  activeWordIndex: {
    border: "1px solid #fff",
    borderRadius: "5px",
    backgroundColor: "#fff",
    color: "#0288D1",
  },
}));


const Word = (props) => {
  const wordRef = useRef();
  const { active, correct, text } = props;

  useEffect(() => {
    if (active) wordRef.current?.scrollIntoView({ block: "start" });
  }, [active]);

  // const { text, active } = props
  if (correct === true) {
    return <span style={{ color: "#8fce00" }}>{text} </span>;
  }
  if (correct === false) {
    return <span style={{ color: "#f44336" }}>{text} </span>;
  }
  if (active) {
    return (
      <span style={{ color: "#FFA500", marginTop: 10 }} ref={wordRef}>
        {text}{" "}
      </span>
    );
  }

  return <span>{text} </span>;
};

const FastFinger = () => {
  const getTextField = () =>
  `Tuyển sinh là việc tuyển chọn trong đó điểm số là tiêu chí cơ bản nhất nên việc các trường xác định điểm chuẩn cao chót vót là điều bình thường Trường xác định điểm chuẩn dựa trên chỉ tiêu còn lại của phương thức tổ hợp xét tuyển Điểm chuẩn phụ thuộc nhiều yếu tố trong đó quan trọng là chỉ tiêu nên khi các trường đa dạng phương thức tuyển sinh họ buộc phải phân chia chỉ tiêu cho từng phương thức và tổ hợp Điều này khiến cho chỉ tiêu cho phương thức xét điểm thi tốt nghiệp còn rất ít Đó là lý do khiến điểm chuẩn cao Văn hóa là yếu tố đặc biệt quan trọng của sự liên kết cộng đồng. Văn hóa dân tộc mang nhiều sắc thái của các địa phương, các sắc tộc, các tập đoàn người song nó vẫn là một nền văn hóa thông nhất không bị chia cắt. Tính thống nhất trong đa dạng là đặc trưng của văn hóa dân tộc. Văn hóa dân tộc hình thành trong quá trình lâu dài của lịch sử, hơn bất cứ yếu tố nào khác, tạo ra sắc thái riêng đa dạng, phong phú của từng dân tộc Mỗi dân tộc có một nền văn hóa riêng để phân biệt dân tộc này với dân tộc khác Văn hóa của mỗi dân tộc không thể phát triển nếu không giao lưu văn hóa với các dân tộc khác Mỗi dân tộc có tâm lý tính cách riêng để nhận biết phải thông qua sinh hoạt vật chất sinh hoạt tinh thần của dân tộc ấy đặc biệt thông qua phong tục tập quán tín ngưỡng đời sống văn hóa. Đối với quốc phòng và an ninh, Đảng và Nhà nước ta đã và đang tăng cường sự lãnh đạo và điều hành đối với công tác xây dựng và huy động nguồn lực cho quốc phòng an ninh cho nước nhà. Theo đó, các cơ quan các cấp, chính quyền địa phương cần phải quán triệt, thực hiện có hiệu quả đường lối quốc phòng, trọng tâm là chủ trương xây dựng tiềm lực huy động kịp thời khi có vấn đề đe doạ tới nền an ninh đất nước Con sóng đã vỗ bờ từ ngàn xưa cho đến bây giờ và mãi mãi về sau này Đó là quy luật bất biến của tự nhiên Tình yêu cũng vậy trước đây hiện nay và mãi mãi về sau nó vẫn khơi lên những khát khao bồi hồi rạo rực Chừng nào còn con người trên cõi thế gian thì chừng ấy tình yêu còn tồn tại như món quà kì diệu mà thượng đế ban tặng cho nhân loại Hai câu thơ đầu tác giả nêu lên những trạng thái cảm xúc đối lập của sóng lúc thì dữ dội mạnh mẽ xô bờ khi thì chảy trôi lững lờ dịu êm Đó cũng là những cảm xúc của người con gái khi yêu Trong tình yêu lúc thì người con gái cuồng nhiệt đắm say nhưng cũng có khi e ấp dè dặt Những trạng thái đó mâu thuẫn nhưng lại thống nhất với nhau Hai câu thơ trên được tổ chức theo phép đối tạo nên một cấu trúc cân xứng hài hòa làm nổi bật các thuộc tính đa dạng mà nhát quán giả đặt những tính từ dịu êm lặng lẽ ở cuối câu thơ vì đây là con sóng nữ tính Tiếng cười trong truyện này thể hiện qua cuộc đối thoại giữa ông quan và anh chồng ông quan thì không biết cách giải quyết vấn đề cho triệt để mà cứ qua loa cho xong chuyện để rồi dẫn đến tình huống trớ trêu còn anh chồng thì có những hành động hồ đồ không suy xét rõ ràng`  
    .toLowerCase()
    .split(".").join("").split(",").join("").split(" ")
    .sort(() => (Math.random() > 0.5 ? -1 : 1));

  const getRealTextField = () =>
  `thiết bị sử dụng dòng điện xoay chiều hiệu điện thế định mức Đại Việt khối không khí lạnh các lực cân bằng nhau mạch điện khi bàn là đạt đến nhiệt độ yêu cầu Đặng Huy Trứ Cầu Long Biên Chú tễu Sông Đồng Nai Sưởi ấm bằng than đá Đổ đầy nước vào hố Lê Thánh Tông Rù rì đôi cánh nối liền mùa hoa Quang phổ liên tục do một vật nóng phát ra phụ thuộc Lễ hội Hoa Phượng Đỏ là một sự kiện văn hóa của thành phố nào Hoa cúc xanh sinh nhật Đảm bảo thân nhiệt ổn định chính là tạo ra sự cân bằng giữa quá trình sinh nhiệt và quá trình tỏa nhiệt Lạm phát Quyết chiến quyết thắng vẻ vang của quân đội ta lần đầu tiên xuất hiện trong chiến dịch nào hình thang hình chữ nhật hình bình hành hình thoi Nam châm không hút được vật được làm bằng chất liệu nào sau đây Độ chua độ kiềm của đất được đo bằng độ Tập bút kí Hà Nội ta đánh Mỹ giỏi của nhà văn Nguyễn Tuân đã được Hội Văn nghệ Hà Nội cho xuất bản lần đầu ngay sau sự kiện kịch sử Quốc gia Đông Nam nào có đường biên giới trên bộ với các quốc gia Nam Nếu cắt bỏ tuyến nào ở nòng nọc thì chúng sẽ không thể biến thành ếch được Đồng bằng châu thổ và đồng bằng duyên hải Giải phóng quân Sự thực bào xuất hiện trên hầu hết thước đo góc dành cho học sinh ở nước ta Một vật rắn cân bằng dưới tác dụng của Nhện thực hiện nhiều động tác nối tiếp nhau để kết nối các sợi tơ thành một tấm lưới bóng chuyền bóng bàn Phải phá tan cuộc tiến công mùa đông của giặc Thành Cổ Loa Loài kiến nhiệt đới nào có những đặc điểm Kiến ba khoang Nguyễn Đình Chiểu Hội nghị thành lập Đảng Cộng sản Ước chung lớn nhất Cộng hưởng Pháp luật Huế Đậu Hà Lan Triều đại nào tồn tại lâu đời nhất lịch sử lái gió với buồm trăng lướt giữa mây cao với biển bằng Loại nhà nào thường được làm ở vùng cao nhằm tránh ẩm thấp thú dữ Nhà sàn Ba mặt phẳng đôi một song song chắn ra trên cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ là cuộc thi âm nhạc dành cho các quốc gia thành viên Liên hiệp phát song châu Do tia sét làm tăng nhiệt độ đột ngột khiến cho không khí cũng đột ngột dãn nở dao động mạnh tạo ra âm thanh là tiếng nổ lớn Một vệ tĩnh phải có chu kì quay là bao lâu để nó trở thành vệ tinh địa tĩnh của Trái Đất Buổi đầu độc lập của nước ta gắn với triều đại nào Ong hút mật hoa đồng thời thụ phấn cho hoa Hồ nhân tạo nào được hình thành do chặm dòng sông Sài Gòn hồ thủy lợi lớn nhất Ô nhiễm không khí Vật đen tuyệt đối Nghĩa sĩ Cần Giuộc Hà Nội Quần vợt Động đất Hát ả đào và hát cô đầu là một tỉnh lị Hê thống quy tắc xử sự chung áp dụng cho mọi cá nhân tần số dao động cưỡng bức tiến đến bằng tần số riêng thuỷ tinh quang học voi ma mút đường trung quốc điện ảnh ngô thừa ân la quán trung phật giáo nhà sư bếp hoàng cầm long an kiến trường mỹ lý trong bóng râm của rừng các cành cây phía dưới bị tàn úa đi tán cây chuyển lên phía trên và cây có vị trí kém vững vàng hơn cây mọc nơi trống trải tán thấp hơn trọng tâm của cây ở phía gần gốc nên cây chống lại áp lực gió có hiệu quả hơn nước mưa rửa trôi bụi bẩn hoạt động của sét là nguồn điện từ kích thích cho phản ứng chuyển đổi khí thành và vì tính khử trùng mạnh của nên không khí cũng trở nên trong lành hơn phở xanh dương nhiệt độ hai thanh là như nhau nguyên nhân ta cảm nhận thanh sắt lạnh hơn là do thanh sắt có khả năng hấp thụ năng lượng nhiệt tốt hơn khiến nhiệt lượng thoát khỏi tay ta nhiều hơn làm ta cảm thấy thanh sắt lạnh hơn thanh nhựa không vì càng lên cao không khí càng loãng áp suất giảm nhiệt độ sôi vì thế mà giảm theo mất đoạn lặp đoạn chuyển đoạn đảo đoạn cảng hàng không long thành sân bay long thành cháu đi mẫu giáo phạm minh tuấn để tăng thể tích cơ thể nhằm tăng khả năng tích trữ nước vì hình trụ và hình cầu có thể tích lớn hơn so với những hình có cùng diện tích toàn phần bá phù bá là con trưởng trọng mưu trọng là con thứ mã siêu mã viện văn ương hạng vũ tây sở bá vương lưu hiệp để chịu được lực nén tốt chùa một cột tam giác vuông quyền lập pháp thuộc về nghị viện hoặc quốc hội quyền tư pháp thuộc về tòa án quyền hành pháp thuộc về chính phủ khúc thừa dụ tất cả các quốc gia trên vì ở độ sâu ba nghìn mét thì nước của tất cả các biển và đại dương đều là nước của các địa cực nhất là từ nam cực chảy đến vì thế nên ở độ sâu này nhiệt độ của nước ở tất cả các biển và đại dương gần như không thay đổi vô số ảnh lý thánh tông bà rịa vũng tàu thất tịch trung quốc mưa ngâu cổ tích ngôi sao ngưu lang chức nữ tài chính chứng khoán tài chính cử tạ đá hát nói tôn thất tùng tam giác đều tuồng châu á thái bình dương không chấp nhận đáp án châu á cầu lông cúc phương hương khê long thành cạnh tranh nhiệt độ nhỏ hơn một chỉ một giao hưởng bóng chuyền nhiệt điện lý thái tông đôi chân nguyên phân lưu huỳnh ngưng tụ đúng hoa hướng dương bắc bộ võ thị sáu dời hình khởi nghĩa lam sơn sông đồng nai hằng số điện môi giải tích nhân dân trường chinh báo búa liềm chiến tranh biên giới tây nam chiến tranh việt nam mười chín quốc gia nguyễn khoa văn hải triều nam xích tử nguyễn khoa điềm trần cừ mất đoạn lý bạch bán nhật triều nam tư cũ cộng hòa liên bang xã hội chủ nghĩa nam tư cách mạng xanh trồng trọt cây lương thực cách mạng trắng chăn nuôi để lấy sữa tản đà nguyễn khắc hiếu thể thủy tinh thủy tinh thể nam châm điện tam giác hình tam giác thành nhà hồ hồ thục kinh đô di sản đá phan huỳnh điểu quảng ngãi tôn đức thắng màu nâu đỏ bóng chuyền hồ tây bùi quang thận xuân quỳnh anh kích thích đồng dư nước vôi trong nút vàng kim lân vai diễn lão hạc lưới thức ăn nối vòng tay lớn cành cọ vàng lê cát trọng lý hoa cúc song lang hiếu khí kỵ khí nhiệt dung riêng củ cải đường hoạn thư hội gò đống đa hoang mạc nam cực ấn độ cầu vồng kim loại chuyển tiếp sừng hàn mặc tử liên hợp quốc liên hiệp quốc động vật quả nhãn pháp công lý bùi thị xuân lý tự trọng lê thánh tông anh hùng lực lượng vũ trang phạm tuân phạm tuân chiến tranh lạnh khải định điện tâm đồ miền nghe được sao thuỷ và sao kim hồ quang điện ngô thanh vân nguyễn thị tuyết dung học khôn tâm thất trái bồ đào nha lý sơn động thiên đường hàn quốc hoa hồng dương huy khải lâm đồng thịt cá bún chả thường xuân trương chi con dế mèn lưu trữ đám mây kỹ sư công nhân lao động đồng quê ngôi sao vôi do trong vết cắn của ong kiến có chứa vôi có tính trung hòa được trong nọc ong kiến bao giờ cho đến tháng mười vì trọng lượng của chiếc kim đè lên mặt nước khi nằm ngang không thắng nổi lực căng bề mặt của nước tác dụng lên nó tây ban nha trần thánh tông và trần nhân tông tổng cục đường sắt gia cát lượng khổng minh chiến tranh đặc biệt chiến tranh cục bộ hóa chiến tranh ở các đường ống nước sẽ xảy ra sự ăn mòn điện hóa trong đó sắt là cực dương còn thanh là cực âm nên thanh sẽ bị ăn mòn điện hóa điều này giúp bảo vệ ống sắt không bị ăn mòn và làm tăng khả năng sử dụng của ống nước bằng sắt đoản mạch không có năm canh hợi chùa dâu bắc ninh tuổi trẻ đông dương cộng sản đảng an nam cộng sản đảng và đông dương cộng sản liên đoàn áo vàng được trao cho người dẫn đầu trong bảng tổng sắp chung cuộc áo trắng dành cho những tay đua trẻ dưới hai mươi lăm tuổi có thành tích xuất sắc trong giải đua khi ở dưới nước gàu nước chịu tác động lực hướng từ dưới đẩy gàu nước lên trên lực này có độ lớn bằng trọng lượng của phần nước bị gàu chiếm chỗ vì thế nên lực kéo cần sử dụng ít hơn khi đã lên khỏi mặt nước thân nhân trung mộc tinh điện ảnh thúc sinh và thúy kiều đồng khánh kiến phúc và hàm nghi`
    .toLowerCase()
    .split(".").join("").split(",").join("").split(" ")
    .sort(() => (Math.random() > 0.5 ? -1 : 1));
    
  const styles = useStyles();
  // const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [activeRealWordIndex, setActiveRealWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [correctRealWordArray, setCorrectRealWordArray] = useState([]);

  const [numWords, setNumWords] = useState(0);
  const [correctWord, setCorrectWord] = useState(0);
  // const [lineWord, setLineWord] = useState(0);

  const [testCount, setTestCount] = useState(2);
  const [disabled, setDisabled] = useState(false);

  const [timer, setTimer] = useState(60);
  const [status, setStatus] = useState(false);
  const [noti, setNoti] = useState("");

  const [result, setResult] = useState("");
  const [resultWPM, setResultWPM] = useState("");
  // lấy text
  const textField = useRef(getTextField());
  const textRealField = useRef(getRealTextField());

  // function
  const processInput = (value) => {
    if (!status) {
      setStatus(true);
      setNoti(false);
    }
    if (
      value.endsWith(" ") ||
      value.endsWith("\n") ||
      value.endsWith("Enter")
    ) {
      setActiveWordIndex((index) => index + 1);
      setActiveRealWordIndex((index) => index + 1);
      setUserInput("");

      setCorrectWordArray((data) => {
        const word = value.trim();
        setNumWords(numWords + 1);
        const newResult = [...data];

        newResult[activeWordIndex] =
          word === textField.current[activeWordIndex];
        if (newResult[activeWordIndex] === true) {
          setCorrectWord(correctWord + 1);
        }
        // if(activeWordIndex === 20){
        //   textField.slice(0, 20);
        // }
        return newResult;
      });
      setCorrectRealWordArray((data) => {
        const word = value.trim();
        setNumWords(numWords + 1);
        const newRealResult = [...data];

        newRealResult[activeWordIndex] =
          word === textRealField.current[activeWordIndex];
        if (newRealResult[activeWordIndex] === true) {
          setCorrectWord(correctWord + 1);
        }
        // if(activeWordIndex === 20){
        //   textField.slice(0, 20);
        // }
        return newRealResult;
      });
    } else {
      setUserInput(value);
    }
  };

  useEffect(() => {
    if (status === true && timer > 0) {
      const timeInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(timeInterval);
      };
    }
    if (timer === 0) {
      setStatus(false);
      setDisabled(true);
      setNoti(true);
    }
    //eslint-disable-next-line
  }, [timer, status]);

  const handleReset = () => {
    setActiveWordIndex(0);
    setUserInput("");
    setTimer(60);

    // reset Word
    setActiveWordIndex(0);
    setActiveRealWordIndex(0);
    setCorrectWordArray([]);
    setCorrectRealWordArray([]);
    setNumWords(0);
    setCorrectWord(0);

    // set status & time
    if (testCount > 0) setTestCount(testCount - 1);
    setStatus(false);
    setDisabled(false);

    // reset Result
    setResult("");
    setResultWPM("");
    if (testCount <= 0) {
      setDisabled(true);
    }
  };

  return (
    <>
      <Notification status={noti} correct={correctWord} word={numWords} />
      <div className={styles.container}>
        <h1 style={{
          color: mainColor,
          fontSize: "4rem",
          padding: "20px",
        }}>
          {testCount === 0 ? "Lượt thi chính thức" : testCount > 0 ? "Lượt thi thử" : "Kết thúc phần thi"}
        </h1>
        <div
          style={{
            backgroundColor: mainColor,
            borderRadius: 20,
            marginBottom: 50,
            padding: "20px 30px",
          }}
        >
          <div className={styles.textContainer}>
            <p className={styles.text}>
              {testCount === 0 ? 
                textRealField.current.map((word, index) => {
                  return (
                    <Word
                      text={word}
                      active={index === activeRealWordIndex}
                      correct={correctRealWordArray[index]}
                    />
                  );
                }) : textField.current.map((word, index) => {
                  return (
                    <Word
                      text={word}
                      active={index === activeWordIndex}
                      correct={correctWordArray[index]}
                    />
                  );
                })
              }
            </p>
          </div>
        </div>
        <div className={styles.input}>
          <div
            style={{
              width: 75,
              backgroundColor: mainColor,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <img alt="icon" src={Icon} style={{ height: 50, marginTop: '-10px' }} />
          </div>
          <TextField
            variant="outlined"
            className={styles.inputText}
            value={userInput}
            onChange={(e) => processInput(e.target.value)}
            disabled={disabled}
            autoFocus={true}
            autoComplete='off'
            sx={{ border: "5px solid", color: mainColor, borderRadius: 2 }}
          />
          <div className={styles.counter}>
            <h4 style={{ color: "#f9f9f9" }}>[ {correctWord} ]</h4>
          </div>

          <Button
            variant="contained"
            onClick={handleReset}
            sx={{ 
              borderRadius: "10px",
              backgroundColor: secondaryColor,
              color: mainColor,
              fontSize: "1.5rem" }}
          >
            <AutorenewIcon />
            <p style={{ marginLeft: 10, fontSize: "1.5rem" }}>{testCount}</p>
          </Button>

          <div className={styles.timer}>
            <h3>{timer}</h3>
          </div>
        </div>
        <div className={styles.result}>
          <h1>{result}</h1>
          <h1>{resultWPM}</h1>
        </div>
      </div>
      <img className={styles.background} src={Background} alt="Background" />
    </>
  );
};

export default FastFinger;
