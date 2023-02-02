const express = require('express');
const router = express.Router();
const path = require('path');
const { title } = require('process');
const db = require('./../db.js');
const multer = require('multer');

router.get('/', (req, res)=>{ /* 메인페이지 */
db.mainPageNoti((rows)=>{
  res.render('mainPage',{rows:rows});
 })
});

router.get('/login', (req, res)=>{ /* 로그인페이지 */
res.render('loginPage');
});

/* 로그인 내용 */
router.post('/logininfo', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let login_id = param['login_id'];
  let login_pw = param['login_pw'];
  db.loginCheck(login_id, login_pw, (results)=>{
    if (results.length > 0){
      res.send(`<script>alert("${login_id}님, 어서오세요."); document.location.href="/";</script>`)
    } else {
      res.send(`<script>alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>`)
    }
  });
})

router.get('/join1', (req, res)=>{ /* 회원가입페이지1 */
res.render('join1Page');
});

router.get('/join2', (req, res)=>{ /* 회원가입페이지2 */
  db.userinfoData((rows)=>{
    res.render('join2Page', {
      rows: rows
    });
  });
});

/* 회원가입 내용을 테이블에 넣기 */
router.post('/joininfo', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let user_name = param['user_name'];
  let user_birth = param['user_birth'];
  let account_type = param['gener'];
  let account_id = param['account_id'];
  let account_pw = param['account_pw'];
  let user_id = param['user_id'];
  let user_pw = param['user_pw'];
  let user_address = param['user_address'];
  let user_phoneNum = param['user_phoneNum'];
  let user_mail = param['user_mail'];
  db.insertUserInfo(user_name, user_birth, account_type, account_id, account_pw, user_id, user_pw, user_address, user_phoneNum, user_mail, ()=>{
    res.redirect('/login');
  });
})

router.get('/sub_noticeList', (req, res)=>{ /* 공지사항 리스트 */
db.getNoti((rows)=>{
  res.render('sub_noticeList',{rows:rows});
 })
});

router.get('/notiConPage', (req, res)=>{ /* 공지사항 뷰어페이지 */
  let id = req.query.id;
  db.getNotiByid(id, (rows, row_prev, row_next, rowid, viewCntPlus) => {
    res.render('notiConPage', {
      row: rows[0],
      row1: row_prev[0],
      row2: row_next[0],
      viewCntPlus: viewCntPlus
    })
  });
});

router.get('/notice_write', (req, res)=>{ /* 공지사항 작성페이지 */
    res.render('notice_write');
});

router.post('/noticeW', (req, res)=>{ /* 공지사항 작성 */
  let param = JSON.parse(JSON.stringify(req.body));
  let cate = param['radio'];
  let writer = param['write'];
  let title = param['title'];
  let cont = param['write_cont'];
  let update = param['upload_radio'];
  db.noticeWrite(cate,writer,title,cont,update,()=>{
    res.redirect('/sub_noticeList')
  })
});
router.get('/notUp', (req,res)=>{/*공지 수정(데이터추출)*/
  let id = req.query.id;
  db.getNoticebyid(id,(row) =>{
    res.render('notice_correct',{row: row[0]})
  })
})
router.post('/Not_corr',(req,res)=>{/*공지 수정(보내기) */
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let cate = param['radio'];
  let title = param['title'];
  let cont = param['write_cont'];
  db.NoticeCorr(id,cate,title,cont,()=>{
    res.redirect('/sub_noticeList')
  })
})

router.get('/notice_correct', (req, res)=>{ /* 공지사항 수정 */
  res.render('notice_correct');
});

router.get('/deleteNoti', (req, res) => {  /* 공지사항 삭제 */
  let id = req.query.id;
  db.deleteNoti(id,() => {
     res.redirect('/sub_noticeList')
  })
})

router.get('/getRecentNoti', (req, res) => {  /* 공지사항 최신순 */
  db.getRecentNoti((rows) => {
     res.render('sub_noticeList',{rows:rows})
  })
})

router.get('/getPastNoti', (req, res) => {  /* 공지사항 과거순 */
  db.getPastNoti((rows) => {
     res.render('sub_noticeList',{rows:rows})
  })
})

router.get('/faqPage', (req, res)=>{ /* FAQ페이지 */
  res.render('faqPage');
});

router.get('/calculator', (req, res)=>{ /* 계산기페이지 */
  res.render('calculatorPage');
})
router.get('/productEplus', (req, res)=>{ /* KB e-plus정기예금 */
  res.render('productEplus');
})
router.get('/productKiwi', (req, res)=>{ /* kiwi신용대출 */
  res.render('productKiwi');
})

router.get('/siteMapPage', (req, res)=>{ /* 사이트맵 */
  res.render('siteMapPage');
})


router.post('/cardapplication',(req,res)=>{/*카드 상품 신청(보내기) */
  let param = JSON.parse(JSON.stringify(req.body));
  let name = param['cardname'];
  let cardproduct = param['cardproduct'];
  let tellnum = param['tellnum'];
  let payinfo = param['pay'];
  let bankaccount = param['bankAccount'];
  let accountDay = param['account_day'];
  let postcode = param['postcode'];
  let address = param['address'];
  let detailAddress = param['detailAddress'];
  let transcard = param['transportationCard'];
  let oncelimit = param['oncelimit'];
  let daylimit = param['daylimit'];
  let monthlimit = param['monthlimit'];
  let tellPay = param['tellPay'];
  let gasPay = param['gasPay'];
  let elPay = param['elPay'];
  let aptPay = param['aptPay'];
  
db.cardapp(name,cardproduct,tellnum,payinfo,bankaccount,accountDay,postcode,address,detailAddress,transcard,oncelimit,daylimit,monthlimit,tellPay,gasPay,elPay,aptPay, ()=>{
    res.redirect('/');
  })
})

router.get('/cardsub_List', (req, res)=>{ /* 카드신청 조회 */
  db.getcardsub((rows)=>{
  res.render('cardsub_List',{rows:rows});
  })
})

router.get('/accountInquiry', (req, res)=>{ /* 계좌조회 페이지 */
  res.render('accountInquiry');
})

router.post('/accountInquiryinfo', (req, res)=>{ /* 계좌조회 페이지 */
let param = JSON.parse(JSON.stringify(req.body));
let user_name = param['user_name'];
  let user_birth = param['user_birth'];
  let account_pw = param['account_pw'];
  db.accountCheck(user_name, user_birth, account_pw, (results)=>{
    if (results.length > 0){
      res.render('accountInquiry2',{
        results: results[0], /* results의 key값을 받기위해서 */
        result: results /* length를 받기위해서 */
      })
    } else {
      res.send(`<script>alert("입력한 정보와 일치하는 계좌가 없습니다. 다시 입력해주세요."); document.location="/accountInquiry";</script>`)
    }
  })
})

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, '../public/img/cardImg/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext)+ Date.now() + ext)
    }
  })
})

router.get('/cardThum_List', (req, res)=>{ /* 카드 상품 리스트 페이지 */
db.getCard((rows)=>{
  res.render('cardThum_List',{rows:rows});
})
})

router.get('/cardThum_Con', (req, res)=>{ /* 카드 상품 뷰어 페이지 */
let id = req.query.id;
db.getCardByid(id,(row)=>{
  res.render('cardThum_Con',{row:row[0]});
})
})

router.get('/cardThum_write', (req, res)=>{ /* 카드 상품 작성 페이지 */
  res.render('cardThum_write');
})
router.post('/cardeW',upload.single('card_img'),(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let name = param['card_name'];
  let cate = param['card_cate'];
  let img = 'img/cardImg/'+ req.file.filename;
  let info = param['card_info'];
  let benefit = param['card_benefit'];
  let content = param['card_cont'];
  db.insertCard(name,cate,img,info,benefit,content, ()=>{
    res.redirect('/cardThum_List')
  })
})

router.get('/cardThum_upDate', (req, res)=>{ /* 카드 상품 수정 페이지 */
  res.render('cardThum_upDate');
})


router.get('/cardsub', (req, res)=>{// 카드신청시 신청 페이지로 이동
let id = req.query.id;
db.getcardinfo(id,(row)=>{
  res.render('cardsub',{row:row[0]});
})
})

router.get('/cardsub_info', (req, res)=>{ /* 카드 신청 승인 페이지 */
let id = req.query.id;
db.cardsubpresent(id,(row)=>{
  res.render('cardsub_info',{row:row[0]});
})
})

/*카드 발급 불가*/
router.get('/notapproval',(req,res)=>{
  // let param = JSON.parse(JSON.stringify(req.body));
  let id = req.query.id;
  // console.log(id);
  db.notapproval(id,()=>{
    res.redirect('/cardsub_List')
  })
})
/*카드 발급 가능*/
router.get('/approval',(req,res)=>{
  let id = req.query.id;
  db.approval(id,()=>{
    res.redirect('/cardsub_List')
  })
})

router.get('/updateC', (req,res) => {
  let id = req.query.id;
  db.getCardByid(id,(row)=>{
    res.render('cardThum_upDate',{row:row[0]})
  })
})

router.post('/updateCard',upload.single("card_img"), (req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let name = param['card_name'];
  let cate = param['card_cate'];
  let img = 'img/cardImg/'+ req.file.filename;
  let info = param['card_info'];
  let benefit = param['card_benefit'];
  let content = param['card_cont'];

  db.updateCard(id, name,cate,img,info,benefit,content, () => {
    res.redirect('/cardThum_List')
  })
})

router.get('/deleteC', (req,res) => {
  let id = req.query.id;
  db.deleteCard(id,()=>{
    res.redirect('/cardThum_List')
  })
})

//카드썸네일 페이지 카테고리
router.get('/totalCard',(req,res)=>{

  db.gettotalCard((rows)=>{
    res.render('cardThum_List',{rows:rows});
  })
});
router.get('/creditCard',(req,res)=>{
  db.getcreditCard((rows)=>{
    res.render('cardThum_List',{rows:rows});
  })
});
router.get('/checkCard',(req,res)=>{

  db.getCheckCard((rows)=>{
    res.render('cardThum_List',{rows:rows});
  })
});

module.exports = router;