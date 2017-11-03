module.exports = (router,fs)=>{
  router.get('/', (req,res)=>{
    res.render('ApiTest')
  });
  return router;
}
