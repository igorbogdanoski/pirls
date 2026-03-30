// Image paths for all stories — add new story image keys here
const imgs = {
  chest: {
    1: '/Тајната на ковчегот/1. Gemini_Generated_Image_svlevhsvlevhsvle.png',
    2: '/Тајната на ковчегот/2. Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png',
    3: '/Тајната на ковчегот/3. Gemini_Generated_Image_tidjntidjntidjnt.png',
    puzzle: {
      1: '/Тајната на ковчегот/1. Gemini_Generated_Image_svlevhsvlevhsvle.png',
      2: '/Тајната на ковчегот/2. Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png',
      3: '/Тајната на ковчегот/3. Gemini_Generated_Image_tidjntidjntidjnt.png'
    },
    coloring: {
      1: '/Тајната на ковчегот/1. Gemini_Generated_Image_svlevhsvlevhsvle.png',
      2: '/Тајната на ковчегот/2. Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png',
      3: '/Тајната на ковчегот/3. Gemini_Generated_Image_tidjntidjntidjnt.png'
    }
  },
  kaja: {
    1: '/Највреднот пронајдок/1. Gemini_Generated_Image_pa6gs9pa6gs9pa6g.png',
    2: '/Највреднот пронајдок/2. Gemini_Generated_Image_mpue84mpue84mpue.png',
    3: '/Највреднот пронајдок/3. Gemini_Generated_Image_irdou7irdou7irdo.png',
    puzzle: {
      1: '/Највреднот пронајдок/Хронолошка слагалка/CS1 Gemini_Generated_Image_z8jgvuz8jgvuz8jg.png',
      2: '/Највреднот пронајдок/Хронолошка слагалка/CS2 Gemini_Generated_Image_du30xxdu30xxdu30.png',
      3: '/Највреднот пронајдок/Хронолошка слагалка/CS3 Gemini_Generated_Image_ebk7aoebk7aoebk7.png',
      4: '/Највреднот пронајдок/Хронолошка слагалка/CS4 Gemini_Generated_Image_8y9l818y9l818y9l.png',
      5: '/Највреднот пронајдок/Хронолошка слагалка/CS5 Gemini_Generated_Image_3k6zon3k6zon3k6z.png',
      6: '/Највреднот пронајдок/Хронолошка слагалка/CS6 Gemini_Generated_Image_y4g489y4g489y4g4.png',
    },
    coloring: {
      1: '/Највреднот пронајдок/Coloring book/CB1 Gemini_Generated_Image_r175f4r175f4r175.png',
      2: '/Највреднот пронајдок/Coloring book/CB2 Gemini_Generated_Image_jjmzlpjjmzlpjjmz.png',
      3: '/Највреднот пронајдок/Coloring book/CB3 Gemini_Generated_Image_xyb3u4xyb3u4xyb3.png',
      4: '/Највреднот пронајдок/Coloring book/CB4 Gemini_Generated_Image_xbu5qxbu5qxbu5qx.png',
      5: '/Највреднот пронајдок/Coloring book/CB5 Gemini_Generated_Image_4pmbx44pmbx44pmb.png',
      6: '/Највреднот пронајдок/Coloring book/CB6 Gemini_Generated_Image_ji98c1ji98c1ji98.png',
    }
  },
  shovel: {
    1: '/Чичкото со лопатата/1. Gemini_Generated_Image_ed1hrfed1hrfed1h.png',
    2: '/Чичкото со лопатата/2. Gemini_Generated_Image_gem9rdgem9rdgem9.png',
    3: '/Чичкото со лопатата/3. Gemini_Generated_Image_ntjzjxntjzjxntjz.png',
    puzzle: {
      1: '/Чичкото со лопатата/Хронолошка слагалка/CS1 Gemini_Generated_Image_a8qj0ra8qj0ra8qj.png',
      2: '/Чичкото со лопатата/Хронолошка слагалка/CS2 Gemini_Generated_Image_w55mh9w55mh9w55m.png',
      3: '/Чичкото со лопатата/Хронолошка слагалка/CS3 Gemini_Generated_Image_rj8lb3rj8lb3rj8l.png',
      4: '/Чичкото со лопатата/Хронолошка слагалка/CS4 Gemini_Generated_Image_d36ulrd36ulrd36u.png',
      5: '/Чичкото со лопатата/Хронолошка слагалка/CS5 Gemini_Generated_Image_jmocvrjmocvrjmoc.png',
    },
    coloring: {
      1: '/Чичкото со лопатата/Coloring book/CB1 Gemini_Generated_Image_ne34vnne34vnne34.png',
      2: '/Чичкото со лопатата/Coloring book/CB2 Gemini_Generated_Image_l240til240til240.png',
      3: '/Чичкото со лопатата/Coloring book/CB3 Gemini_Generated_Image_p3tc9dp3tc9dp3tc.png',
      4: '/Чичкото со лопатата/Coloring book/CB4 Gemini_Generated_Image_ocg8qxocg8qxocg8.png',
      5: '/Чичкото со лопатата/Coloring book/CB5 Gemini_Generated_Image_2b0kbn2b0kbn2b0k (1).png',
    }
  },
  lynx: {
    1: '/Балканскиот рис/1. Gemini_Generated_Image_a0xj05a0xj05a0xj.png',
    2: '/Балканскиот рис/2. Gemini_Generated_Image_dk2d2wdk2d2wdk2d.png',
    3: '/Балканскиот рис/3. Gemini_Generated_Image_8i86cr8i86cr8i86.png',
    puzzle: {
      1: '/Балканскиот рис/Хронолошка слагалка/CS1 Gemini_Generated_Image_raew1draew1draew.png',
      2: '/Балканскиот рис/Хронолошка слагалка/CS2 Gemini_Generated_Image_bdi59obdi59obdi5.png',
      3: '/Балканскиот рис/Хронолошка слагалка/CS3 Gemini_Generated_Image_ofv3l1ofv3l1ofv3.png',
      4: '/Балканскиот рис/Хронолошка слагалка/CS4 Gemini_Generated_Image_3yxtxd3yxtxd3yxt.png',
      5: '/Балканскиот рис/Хронолошка слагалка/CS5 Gemini_Generated_Image_3xced03xced03xce.png',
      6: '/Балканскиот рис/Хронолошка слагалка/CS6 Gemini_Generated_Image_u1tfjzu1tfjzu1tf.png',
    },
    coloring: {
      1: '/Балканскиот рис/coloring book/CB1 Gemini_Generated_Image_2vp3zd2vp3zd2vp3.png',
      2: '/Балканскиот рис/coloring book/CB2 Gemini_Generated_Image_wz11onwz11onwz11.png',
      3: '/Балканскиот рис/coloring book/CB3 Gemini_Generated_Image_ddmzrlddmzrlddmz.png',
      4: '/Балканскиот рис/coloring book/CB4 Gemini_Generated_Image_h19kjqh19kjqh19k.png',
      5: '/Балканскиот рис/coloring book/CB5 Gemini_Generated_Image_rt9bpsrt9bpsrt9b.png',
      6: '/Балканскиот рис/coloring book/CB6 Gemini_Generated_Image_7szxdt7szxdt7szx.png',
    }
  },
  baba: {
    1: '/baba gun/1. Gemini_Generated_Image_ubtmx7ubtmx7ubtm.png',
    2: '/baba gun/2. Gemini_Generated_Image_66pz9466pz9466pz.png',
    3: '/baba gun/3. Gemini_Generated_Image_hx2q1vhx2q1vhx2q.png',
    4: '/baba gun/4. Gemini_Generated_Image_b0mh53b0mh53b0mh.png',
    puzzle: {
      1: '/baba gun/Hronoloski slagalki/1 Gemini_Generated_Image_cszl5bcszl5bcszl.png',
      2: '/baba gun/Hronoloski slagalki/2 Gemini_Generated_Image_bockdcbockdcbock.png',
      3: '/baba gun/Hronoloski slagalki/3 Gemini_Generated_Image_xfis2zxfis2zxfis.png',
      4: '/baba gun/Hronoloski slagalki/4 Gemini_Generated_Image_5gfp4t5gfp4t5gfp.png',
      5: '/baba gun/Hronoloski slagalki/5 Gemini_Generated_Image_c4v4yfc4v4yfc4v4.png'
    },
    coloring: {
      1: '/baba gun/Story board and colorin book/1 Gemini_Generated_Image_puhov0puhov0puho.png',
      2: '/baba gun/Story board and colorin book/2 Gemini_Generated_Image_6qunt16qunt16qun.png',
      3: '/baba gun/Story board and colorin book/3 Gemini_Generated_Image_el9wb5el9wb5el9w.png',
      4: '/baba gun/Story board and colorin book/4 Gemini_Generated_Image_rtzmsartzmsartzm.png',
      5: '/baba gun/Story board and colorin book/5 Gemini_Generated_Image_qikdraqikdraqikd.png',
      6: '/baba gun/Story board and colorin book/6 Gemini_Generated_Image_up56l0up56l0up56.png'
    }
  },
  octopus: {
    1: '/Prekrasnot oktopod/1. Gemini_Generated_Image_imotqgimotqgimot.png',
    2: '/Prekrasnot oktopod/2. Gemini_Generated_Image_j3yja4j3yja4j3yj.png',
    3: '/Prekrasnot oktopod/3.png',
    4: '/Prekrasnot oktopod/4. Gemini_Generated_Image_ftap80ftap80ftap.png',
    5: '/Prekrasnot oktopod/5. Gemini_Generated_Image_jlxu41jlxu41jlxu.png',
    6: '/Prekrasnot oktopod/6. Gemini_Generated_Image_4t3xbb4t3xbb4t3x.png',
    7: '/Prekrasnot oktopod/7. Gemini_Generated_Image_ly489vly489vly48.png',
    puzzle: {
      1: '/Prekrasnot oktopod/Hronoloska Slagalka/1 Gemini_Generated_Image_e2gucde2gucde2gu.png',
      2: '/Prekrasnot oktopod/Hronoloska Slagalka/2 Gemini_Generated_Image_bvd378bvd378bvd3.png',
      3: '/Prekrasnot oktopod/Hronoloska Slagalka/3 Gemini_Generated_Image_vcoaodvcoaodvcoa.png',
      4: '/Prekrasnot oktopod/Hronoloska Slagalka/4 Gemini_Generated_Image_8jp0qq8jp0qq8jp0.png',
      5: '/Prekrasnot oktopod/Hronoloska Slagalka/5.png',
      6: '/Prekrasnot oktopod/Hronoloska Slagalka/6.png',
      7: '/Prekrasnot oktopod/Hronoloska Slagalka/7 Gemini_Generated_Image_x8oyr4x8oyr4x8oy.png'
    },
    coloring: {
      1: '/Prekrasnot oktopod/Story board and colorin book/1 Gemini_Generated_Image_v7t8k3v7t8k3v7t8.png',
      2: '/Prekrasnot oktopod/Story board and colorin book/2 Gemini_Generated_Image_f1t7o0f1t7o0f1t7.png',
      3: '/Prekrasnot oktopod/Story board and colorin book/3 Gemini_Generated_Image_z78pizz78pizz78p.png',
      4: '/Prekrasnot oktopod/Story board and colorin book/4 Gemini_Generated_Image_opk6mxopk6mxopk6.png',
      5: '/Prekrasnot oktopod/Story board and colorin book/5 Gemini_Generated_Image_h4xz8lh4xz8lh4xz.png',
      6: '/Prekrasnot oktopod/Story board and colorin book/6 Gemini_Generated_Image_jad20zjad20zjad2.png'
    }
  },
  watchmaker: {
    1: '/Тајната на часовничарот/1. Gemini_Generated_Image_93tlph93tlph93tl.png',
    2: '/Тајната на часовничарот/2. Gemini_Generated_Image_4gmp3n4gmp3n4gmp.png',
    3: '/Тајната на часовничарот/3. Gemini_Generated_Image_1rt2501rt2501rt2.png',
    puzzle: {
      1: '/Тајната на часовничарот/Хронолошка слагалка/CS1 Gemini_Generated_Image_jiguc7jiguc7jigu.png',
      2: '/Тајната на часовничарот/Хронолошка слагалка/CS2 Gemini_Generated_Image_35oeg935oeg935oe.png',
      3: '/Тајната на часовничарот/Хронолошка слагалка/CS3 Gemini_Generated_Image_2adztq2adztq2adz.png',
      4: '/Тајната на часовничарот/Хронолошка слагалка/CS4 Gemini_Generated_Image_b8tpa4b8tpa4b8tp.png',
      5: '/Тајната на часовничарот/Хронолошка слагалка/CS5 Gemini_Generated_Image_ujxmbxujxmbxujxm.png',
    },
    coloring: {
      1: '/Тајната на часовничарот/Coloring book/CB1 Gemini_Generated_Image_uec6qkuec6qkuec6.png',
      2: '/Тајната на часовничарот/Coloring book/CB2 Gemini_Generated_Image_xoirypxoirypxoir.png',
      3: '/Тајната на часовничарот/Coloring book/CB3 Gemini_Generated_Image_qhoocaqhoocaqhoo.png',
      4: '/Тајната на часовничарот/Coloring book/CB4 Gemini_Generated_Image_o0uhnxo0uhnxo0uh.png',
      5: '/Тајната на часовничарот/Coloring book/CB5 Gemini_Generated_Image_r2fommr2fommr2fo.png',
    }
  },
  kite: {
    1: '/Змејот на трпението/1. Gemini_Generated_Image_ovlkzqovlkzqovlk.png',
    2: '/Змејот на трпението/2. Gemini_Generated_Image_2fxzxn2fxzxn2fxz.png',
    3: '/Змејот на трпението/3. Gemini_Generated_Image_22q3ph22q3ph22q3.png',
    puzzle: {
      1: '/Змејот на трпението/Хронолошка слагалка/CS1 Gemini_Generated_Image_sky2v3sky2v3sky2.png',
      2: '/Змејот на трпението/Хронолошка слагалка/CS2 Gemini_Generated_Image_hqz8vqhqz8vqhqz8.png',
      3: '/Змејот на трпението/Хронолошка слагалка/CS3 Gemini_Generated_Image_i9jabvi9jabvi9ja.png',
      4: '/Змејот на трпението/Хронолошка слагалка/CS4 Gemini_Generated_Image_k3ccvzk3ccvzk3cc.png',
      5: '/Змејот на трпението/Хронолошка слагалка/CS5 Gemini_Generated_Image_7zihve7zihve7zih.png',
      6: '/Змејот на трпението/Хронолошка слагалка/CS6 Gemini_Generated_Image_c85lgac85lgac85l.png',
    },
    coloring: {
      1: '/Змејот на трпението/Coloring book/CB1 Gemini_Generated_Image_t8pxs1t8pxs1t8px.png',
      2: '/Змејот на трпението/Coloring book/CB2 Gemini_Generated_Image_dpmm2zdpmm2zdpmm.png',
      3: '/Змејот на трпението/Coloring book/CB3 Gemini_Generated_Image_qwozg4qwozg4qwoz.png',
      4: '/Змејот на трпението/Coloring book/CB4 Gemini_Generated_Image_w5gbpew5gbpew5gb.png',
      5: '/Змејот на трпението/Coloring book/CB5 Gemini_Generated_Image_f6875f6875f6875f.png',
      6: '/Змејот на трпението/Coloring book/CB6 Gemini_Generated_Image_egd4u4egd4u4egd4.png',
    }
  },
  rabbit: {
    1: '/Зајакот и земјотресот/1. Gemini_Generated_Image_j12s9rj12s9rj12s.png',
    2: '/Зајакот и земјотресот/2. Gemini_Generated_Image_nnfx6onnfx6onnfx.png',
    3: '/Зајакот и земјотресот/3. Gemini_Generated_Image_1hdc6w1hdc6w1hdc.png',
    puzzle: {
      1: '/Зајакот и земјотресот/Хронолошка слагалка/CS1 Gemini_Generated_Image_8fz4zl8fz4zl8fz4.png',
      2: '/Зајакот и земјотресот/Хронолошка слагалка/CS2 Gemini_Generated_Image_5coqmn5coqmn5coq.png',
      3: '/Зајакот и земјотресот/Хронолошка слагалка/CS3 Gemini_Generated_Image_yezeryyezeryyeze.png',
      4: '/Зајакот и земјотресот/Хронолошка слагалка/CS4 Gemini_Generated_Image_2l4gjj2l4gjj2l4g.png',
      5: '/Зајакот и земјотресот/Хронолошка слагалка/CS5 Gemini_Generated_Image_5tidyj5tidyj5tid.png',
      6: '/Зајакот и земјотресот/Хронолошка слагалка/CS6 Gemini_Generated_Image_xl75lxxl75lxxl75.png',
    },
    coloring: {
      1: '/Зајакот и земјотресот/Coloring book/CB1 Gemini_Generated_Image_zcb8h3zcb8h3zcb8.png',
      2: '/Зајакот и земјотресот/Coloring book/CB2 Gemini_Generated_Image_bpboecbpboecbpbo.png',
      3: '/Зајакот и земјотресот/Coloring book/CB3 Gemini_Generated_Image_ry1uj7ry1uj7ry1u.png',
      4: '/Зајакот и земјотресот/Coloring book/CB4 Gemini_Generated_Image_zdd4ekzdd4ekzdd4.png',
      5: '/Зајакот и земјотресот/Coloring book/CB5 Gemini_Generated_Image_2xl9802xl9802xl9.png',
      6: '/Зајакот и земјотресот/Coloring book/CB6 Gemini_Generated_Image_fl3b4ufl3b4ufl3b.png',
    }
  },
  puffins: {
    1: '/Морските папаглачиња/1. Gemini_Generated_Image_6rliq26rliq26rli.png',
    2: '/Морските папаглачиња/2. Gemini_Generated_Image_3eunt73eunt73eun.png',
    3: '/Морските папаглачиња/3. Gemini_Generated_Image_3nal113nal113nal.png',
    4: '/Морските папаглачиња/4. Gemini_Generated_Image_s0veo8s0veo8s0ve.png',
    puzzle: {
      1: '/Морските папаглачиња/Хронолошка слагалка/CS1 Gemini_Generated_Image_t6jrvdt6jrvdt6jr.png',
      2: '/Морските папаглачиња/Хронолошка слагалка/CS2 Gemini_Generated_Image_dp3en3dp3en3dp3e.png',
      3: '/Морските папаглачиња/Хронолошка слагалка/CS3 Gemini_Generated_Image_kdj2b0kdj2b0kdj2.png',
      4: '/Морските папаглачиња/Хронолошка слагалка/CS4 Gemini_Generated_Image_c0qhrlc0qhrlc0qh.png',
      5: '/Морските папаглачиња/Хронолошка слагалка/CS5 Gemini_Generated_Image_l7k9p7l7k9p7l7k9.png',
      6: '/Морските папаглачиња/Хронолошка слагалка/CS6 Gemini_Generated_Image_67x9iv67x9iv67x9.png',
    },
    coloring: {
      1: '/Морските папаглачиња/Coloring book/CB1 Gemini_Generated_Image_tiyeetiyeetiyeet.png',
      2: '/Морските папаглачиња/Coloring book/CB2 Gemini_Generated_Image_r2yv72r2yv72r2yv.png',
      3: '/Морските папаглачиња/Coloring book/CB3 Gemini_Generated_Image_8elv08elv08elv08.png',
      4: '/Морските папаглачиња/Coloring book/CB4 Gemini_Generated_Image_wzflsbwzflsbwzfl.png',
      5: '/Морските папаглачиња/Coloring book/CB5 Gemini_Generated_Image_k86cuek86cuek86c.png',
      6: '/Морските папаглачиња/Coloring book/CB6 Gemini_Generated_Image_yz1nehyz1nehyz1n.png',
    }
  },
  eagle: {
    1: '/Летај, орле, летај/1. Gemini_Generated_Image_x2nnwgx2nnwgx2nn.png',
    2: '/Летај, орле, летај/2. Gemini_Generated_Image_u4kacou4kacou4ka.png',
    3: '/Летај, орле, летај/3. Gemini_Generated_Image_ixkjpdixkjpdixkj.png',
    4: '/Летај, орле, летај/4. Gemini_Generated_Image_ac4r2pac4r2pac4r.png',
    puzzle: {
      1: '/Летај, орле, летај/Хронолошка слагалка/CS1 Gemini_Generated_Image_yatorvyatorvyato.png',
      2: '/Летај, орле, летај/Хронолошка слагалка/CS2 Gemini_Generated_Image_brigmebrigmebrig.png',
      3: '/Летај, орле, летај/Хронолошка слагалка/CS3 Gemini_Generated_Image_nil5sjnil5sjnil5.png',
      4: '/Летај, орле, летај/Хронолошка слагалка/CS4 Gemini_Generated_Image_9rviem9rviem9rvi.png',
      5: '/Летај, орле, летај/Хронолошка слагалка/CS5 Gemini_Generated_Image_mickapmickapmick.png',
      6: '/Летај, орле, летај/Хронолошка слагалка/CS6 Gemini_Generated_Image_xhcmozxhcmozxhcm.png',
    },
    coloring: {
      1: '/Летај, орле, летај/Coloring book/CB1 Gemini_Generated_Image_65fsc965fsc965fs.png',
      2: '/Летај, орле, летај/Coloring book/CB2 Gemini_Generated_Image_rhpk3wrhpk3wrhpk.png',
      3: '/Летај, орле, летај/Coloring book/CB3 Gemini_Generated_Image_qdvueqqdvueqqdvu.png',
      4: '/Летај, орле, летај/Coloring book/CB4 Gemini_Generated_Image_f21t9lf21t9lf21t.png',
      5: '/Летај, орле, летај/Coloring book/CB5 Gemini_Generated_Image_1p0l3i1p0l3i1p0l.png',
      6: '/Летај, орле, летај/Coloring book/CB6 Gemini_Generated_Image_pqmwyqpqmwyqpqmw.png',
    }
  },
  pita: {
    1: '/Пита за непријателот/1. Gemini_Generated_Image_cfaajhcfaajhcfaa.png',
    2: '/Пита за непријателот/2. Gemini_Generated_Image_akd8v0akd8v0akd8.png',
    3: '/Пита за непријателот/3. Gemini_Generated_Image_hlvzmthlvzmthlvz.png',
    4: '/Пита за непријателот/4. Gemini_Generated_Image_bn489hbn489hbn48.png',
    puzzle: {
      1: '/Пита за непријателот/Хронолошка слагалка/CS1 Gemini_Generated_Image_t30gkwt30gkwt30g.png',
      2: '/Пита за непријателот/Хронолошка слагалка/CS2 Gemini_Generated_Image_yq56fayq56fayq56.png',
      3: '/Пита за непријателот/Хронолошка слагалка/CS3 Gemini_Generated_Image_e4mlfue4mlfue4ml.png',
      4: '/Пита за непријателот/Хронолошка слагалка/CS4 Gemini_Generated_Image_yd6ne4yd6ne4yd6n.png',
      5: '/Пита за непријателот/Хронолошка слагалка/CS5 Gemini_Generated_Image_v8nhb5v8nhb5v8nh.png',
      6: '/Пита за непријателот/Хронолошка слагалка/CS6 Gemini_Generated_Image_3s3jj33s3jj33s3j.png',
    },
    coloring: {
      1: '/Пита за непријателот/Coloring book/CB1 Gemini_Generated_Image_75ajex75ajex75aj.png',
      2: '/Пита за непријателот/Coloring book/CB2 Gemini_Generated_Image_1vngnv1vngnv1vng.png',
      3: '/Пита за непријателот/Coloring book/CB3 Gemini_Generated_Image_t9mh9vt9mh9vt9mh.png',
      4: '/Пита за непријателот/Coloring book/CB4 Gemini_Generated_Image_hj52lvhj52lvhj52.png',
      5: '/Пита за непријателот/Coloring book/CB5 Gemini_Generated_Image_6m26o26m26o26m26.png',
      6: '/Пита за непријателот/Coloring book/CB6 Gemini_Generated_Image_u9zwuzu9zwuzu9zw.png',
    }
  },
  hiking: {
    1: '/Пешачење приказна/1. Gemini_Generated_Image_5x7tln5x7tln5x7t.png',
    2: '/Пешачење приказна/2. Gemini_Generated_Image_arh7tsarh7tsarh7.png',
    3: '/Пешачење приказна/3. Gemini_Generated_Image_w6oeyrw6oeyrw6oe.png',
    4: '/Пешачење приказна/4. Gemini_Generated_Image_ln42o0ln42o0ln42.png',
    puzzle: {
      1: '/Пешачење приказна/Излет хронолошка сложувалка/1. Gemini_Generated_Image_dohdk4dohdk4dohd.png',
      2: '/Пешачење приказна/Излет хронолошка сложувалка/2. Gemini_Generated_Image_arh7tsarh7tsarh7.png',
      3: '/Пешачење приказна/Излет хронолошка сложувалка/3. Gemini_Generated_Image_o6ynro6ynro6ynro.png',
      4: '/Пешачење приказна/Излет хронолошка сложувалка/4. Gemini_Generated_Image_1tvfzi1tvfzi1tvf.png',
      5: '/Пешачење приказна/Излет хронолошка сложувалка/5. Gemini_Generated_Image_w6oeyrw6oeyrw6oe.png',
      6: '/Пешачење приказна/Излет хронолошка сложувалка/6. Gemini_Generated_Image_5x7tln5x7tln5x7t.png',
      7: '/Пешачење приказна/Излет хронолошка сложувалка/7. Gemini_Generated_Image_6fb10g6fb10g6fb1.png'
    },
    coloring: {
      1: '/Пешачење приказна/coloring book/Gemini_Generated_Image_3shq843shq843shq.png',
      2: '/Пешачење приказна/coloring book/Gemini_Generated_Image_b2547tb2547tb254.png',
      3: '/Пешачење приказна/coloring book/Gemini_Generated_Image_btja5sbtja5sbtja.png',
      4: '/Пешачење приказна/coloring book/Gemini_Generated_Image_d0wyh8d0wyh8d0wy.png',
      5: '/Пешачење приказна/coloring book/Gemini_Generated_Image_eini6teini6teini.png',
      6: '/Пешачење приказна/coloring book/Gemini_Generated_Image_inureainureainur.png',
      7: '/Пешачење приказна/coloring book/Gemini_Generated_Image_nziin2nziin2nzii.png'
    }
  },
  fossil: {
    1: '/Заб приказна/1. Gemini_Generated_Image_4wuxj4wuxj4wuxj4.png',
    2: '/Заб приказна/2. Gemini_Generated_Image_mo45g6mo45g6mo45.png',
    3: '/Заб приказна/3. Gemini_Generated_Image_6p7e426p7e426p7e.png',
    4: '/Заб приказна/4b.png',
    5: '/Заб приказна/5. Gemini_Generated_Image_c5p20ic5p20ic5p2.png',
    6: '/Заб приказна/6. Gemini_Generated_Image_fd9pplfd9pplfd9p.png',
    puzzle: {
      1: '/Заб приказна/хронолоска слагалка/1. Gemini_Generated_Image_1y5z5e1y5z5e1y5z.png',
      2: '/Заб приказна/хронолоска слагалка/2. Gemini_Generated_Image_mo45g6mo45g6mo45.png',
      3: '/Заб приказна/хронолоска слагалка/3. Gemini_Generated_Image_sfcb4isfcb4isfcb.png',
      4: '/Заб приказна/хронолоска слагалка/4. Gemini_Generated_Image_6p7e426p7e426p7e.png',
      5: '/Заб приказна/хронолоска слагалка/5. Gemini_Generated_Image_a31784a31784a317.png',
      6: '/Заб приказна/хронолоска слагалка/6. Gemini_Generated_Image_c5p20ic5p20ic5p2.png',
      7: '/Заб приказна/хронолоска слагалка/7. Gemini_Generated_Image_fd9pplfd9pplfd9p.png'
    },
    coloring: {
      1: '/Заб приказна/coloring book/1. Gemini_Generated_Image_h6a8eeh6a8eeh6a8.png',
      2: '/Заб приказна/coloring book/2. Gemini_Generated_Image_9lwgnq9lwgnq9lwg.png',
      3: '/Заб приказна/coloring book/3. Gemini_Generated_Image_gd57e4gd57e4gd57.png',
      4: '/Заб приказна/coloring book/4. Gemini_Generated_Image_gvpk0dgvpk0dgvpk.png',
      5: '/Заб приказна/coloring book/5. Gemini_Generated_Image_m8wvlwm8wvlwm8wv.png',
      6: '/Заб приказна/coloring book/6. Gemini_Generated_Image_84a3il84a3il84a3.png',
      7: '/Заб приказна/coloring book/7. Gemini_Generated_Image_awwtbqawwtbqawwt.png'
    }
  },
  pot: {
    1: '/Празната сакасија/1. Gemini_Generated_Image_einjoqeinjoqeinj.png',
    2: '/Празната сакасија/2. Gemini_Generated_Image_b3y8c8b3y8c8b3y8.png',
    3: '/Празната сакасија/3. Gemini_Generated_Image_o1o795o1o795o1o7.png',
    4: '/Празната сакасија/4. Gemini_Generated_Image_1s3ljj1s3ljj1s3l.png',
    puzzle: {
      1: '/Празната сакасија/Хронолошка слагалка/CS1 Gemini_Generated_Image_vfi6bbvfi6bbvfi6.png',
      2: '/Празната сакасија/Хронолошка слагалка/CS2 Gemini_Generated_Image_ifvq0rifvq0rifvq.png',
      3: '/Празната сакасија/Хронолошка слагалка/CS3 Gemini_Generated_Image_rxj4ejrxj4ejrxj4.png',
      4: '/Празната сакасија/Хронолошка слагалка/CS4 Gemini_Generated_Image_flmxbiflmxbiflmx.png',
      5: '/Празната сакасија/Хронолошка слагалка/CS5 Gemini_Generated_Image_5948sb5948sb5948.png',
      6: '/Празната сакасија/Хронолошка слагалка/CS6 Gemini_Generated_Image_h8oxmjh8oxmjh8ox.png',
    },
    coloring: {
      1: '/Празната сакасија/Coloring book/CB1 Gemini_Generated_Image_mg0w8dmg0w8dmg0w.png',
      2: '/Празната сакасија/Coloring book/CB2 Gemini_Generated_Image_x7snglx7snglx7sn.png',
      3: '/Празната сакасија/Coloring book/CB3 Gemini_Generated_Image_qlvujbqlvujbqlvu.png',
      4: '/Празната сакасија/Coloring book/CB4 Gemini_Generated_Image_tptai3tptai3tpta.png',
      5: '/Празната сакасија/Coloring book/CB5 Gemini_Generated_Image_c94uyhc94uyhc94u.png',
      6: '/Празната сакасија/Coloring book/CB6 Gemini_Generated_Image_1gxw4o1gxw4o1gxw.png',
    }
  },
  lakestar: {
    1: '/Езерската ѕвезда/1. Gemini_Generated_Image_su41m5su41m5su41.png',
    2: '/Езерската ѕвезда/2. Gemini_Generated_Image_ppf1i4ppf1i4ppf1.png',
    3: '/Езерската ѕвезда/3. Gemini_Generated_Image_vjdvnvjdvnvjdvnv.png',
    4: '/Езерската ѕвезда/4. Gemini_Generated_Image_ynhufmynhufmynhu.png',
    puzzle: {
      1: '/Езерската ѕвезда/Хронолошка слагалка/CS1 Gemini_Generated_Image_ufelk7ufelk7ufel.png',
      2: '/Езерската ѕвезда/Хронолошка слагалка/CS2 Gemini_Generated_Image_s9p6wus9p6wus9p6.png',
      3: '/Езерската ѕвезда/Хронолошка слагалка/CS3 Gemini_Generated_Image_q2dp47q2dp47q2dp.png',
      4: '/Езерската ѕвезда/Хронолошка слагалка/CS4 Gemini_Generated_Image_2mrjf72mrjf72mrj.png',
      5: '/Езерската ѕвезда/Хронолошка слагалка/CS5 Gemini_Generated_Image_qawt3rqawt3rqawt.png',
      6: '/Езерската ѕвезда/Хронолошка слагалка/CS6 Gemini_Generated_Image_krltebkrltebkrlt.png',
    },
    coloring: {
      1: '/Езерската ѕвезда/Coloring book/CB1 Gemini_Generated_Image_ynu0yoynu0yoynu0.png',
      2: '/Езерската ѕвезда/Coloring book/CB2 Gemini_Generated_Image_6gajlz6gajlz6gaj.png',
      3: '/Езерската ѕвезда/Coloring book/CB3 Gemini_Generated_Image_tmvrjrtmvrjrtmvr.png',
      4: '/Езерската ѕвезда/Coloring book/CB4 Gemini_Generated_Image_ckp8wyckp8wyckp8.png',
      5: '/Езерската ѕвезда/Coloring book/CB5 Gemini_Generated_Image_frhmgcfrhmgcfrhm.png',
      6: '/Езерската ѕвезда/Coloring book/CB6 Gemini_Generated_Image_z8d97ez8d97ez8d9.png',
    }
  },
  lambe: {
    1: '/Дедо Ламбе и глувците/1. Gemini_Generated_Image_arl5jlarl5jlarl5.png',
    2: '/Дедо Ламбе и глувците/2. Gemini_Generated_Image_n6rwy4n6rwy4n6rw.png',
    3: '/Дедо Ламбе и глувците/3. Gemini_Generated_Image_gusm51gusm51gusm.png',
    4: '/Дедо Ламбе и глувците/4. Gemini_Generated_Image_tavd0ktavd0ktavd.png',
    puzzle: {
      1: '/Дедо Ламбе и глувците/Хронолошка слагалка/CS1 Gemini_Generated_Image_acsltqacsltqacsl.png',
      2: '/Дедо Ламбе и глувците/Хронолошка слагалка/CS2 Gemini_Generated_Image_q3ehuaq3ehuaq3eh.png',
      3: '/Дедо Ламбе и глувците/Хронолошка слагалка/CS3 Gemini_Generated_Image_nuh2qfnuh2qfnuh2.png',
      4: '/Дедо Ламбе и глувците/Хронолошка слагалка/CS4 Gemini_Generated_Image_vemo0gvemo0gvemo.png',
      5: '/Дедо Ламбе и глувците/Хронолошка слагалка/CS5 Gemini_Generated_Image_9in6pk9in6pk9in6.png',
      6: '/Дедо Ламбе и глувците/Хронолошка слагалка/CS6 Gemini_Generated_Image_ftkhwmftkhwmftkh.png',
      7: '/Дедо Ламбе и глувците/Хронолошка слагалка/CS7 Gemini_Generated_Image_s48vaks48vaks48v.png',
    },
    coloring: {
      1: '/Дедо Ламбе и глувците/Coloring book/CB1 Gemini_Generated_Image_yakerlyakerlyake.png',
      2: '/Дедо Ламбе и глувците/Coloring book/CB2 Gemini_Generated_Image_7j31al7j31al7j31.png',
      3: '/Дедо Ламбе и глувците/Coloring book/CB3 Gemini_Generated_Image_kbre4mkbre4mkbre.png',
      4: '/Дедо Ламбе и глувците/Coloring book/CB4 Gemini_Generated_Image_ad0pgxad0pgxad0p.png',
      5: '/Дедо Ламбе и глувците/Coloring book/CB5 Gemini_Generated_Image_dx51lcdx51lcdx51.png',
      6: '/Дедо Ламбе и глувците/Coloring book/CB6 Gemini_Generated_Image_mb1fnnmb1fnnmb1f.png',
      7: '/Дедо Ламбе и глувците/Coloring book/CB7 Gemini_Generated_Image_u0pl3gu0pl3gu0pl.png',
    }
  },
  lighthouse: {
    1: '/Светлината на Ирското Море/1. Gemini_Generated_Image_h7baeh7baeh7baeh.png',
    2: '/Светлината на Ирското Море/2. Gemini_Generated_Image_xe0jvfxe0jvfxe0j.png',
    3: '/Светлината на Ирското Море/3. Gemini_Generated_Image_tqa2mutqa2mutqa2.png',
    4: '/Светлината на Ирското Море/4. Gemini_Generated_Image_qcudr8qcudr8qcud.png',
    puzzle: {
      1: '/Светлината на Ирското Море/хронолошка слагалка/1. Gemini_Generated_Image_2figja2figja2fig.png',
      2: '/Светлината на Ирското Море/хронолошка слагалка/2. Gemini_Generated_Image_h7baeh7baeh7baeh.png',
      3: '/Светлината на Ирското Море/хронолошка слагалка/3. Gemini_Generated_Image_xe0jvfxe0jvfxe0j.png',
      4: '/Светлината на Ирското Море/хронолошка слагалка/4. Gemini_Generated_Image_tqa2mutqa2mutqa2.png',
      5: '/Светлината на Ирското Море/хронолошка слагалка/5. Gemini_Generated_Image_4nn0ce4nn0ce4nn0.png',
      6: '/Светлината на Ирското Море/хронолошка слагалка/6. Gemini_Generated_Image_qcudr8qcudr8qcud.png',
      7: '/Светлината на Ирското Море/хронолошка слагалка/7. Gemini_Generated_Image_94kijd94kijd94ki.png'
    },
    coloring: {
      1: '/Светлината на Ирското Море/coloring/1. Gemini_Generated_Image_kfyyflkfyyflkfyy.png',
      2: '/Светлината на Ирското Море/coloring/2. Gemini_Generated_Image_olvqo0olvqo0olvq.png',
      3: '/Светлината на Ирското Море/coloring/3. Gemini_Generated_Image_v81snav81snav81s.png',
      4: '/Светлината на Ирското Море/coloring/4. Gemini_Generated_Image_ju19fyju19fyju19.png',
      5: '/Светлината на Ирското Море/coloring/5. Gemini_Generated_Image_63m11a63m11a63m1.png',
      6: '/Светлината на Ирското Море/coloring/6. Gemini_Generated_Image_iute7riute7riute.png',
      7: '/Светлината на Ирското Море/coloring/7. Gemini_Generated_Image_e5v17pe5v17pe5v1.png'
    }
  },
  forgotten_garden: {
    1: '/Тајната на заборавената градина/1. Gemini_Generated_Image_bhirglbhirglbhir.png',
    2: '/Тајната на заборавената градина/2. Gemini_Generated_Image_ct8ognct8ognct8o.png',
    3: '/Тајната на заборавената градина/3. Gemini_Generated_Image_umpy9kumpy9kumpy.png',
    4: '/Тајната на заборавената градина/4. Gemini_Generated_Image_38kc7q38kc7q38kc.png',
    puzzle: {
      1: '/Тајната на заборавената градина/хронолоска слагалка/1. Gemini_Generated_Image_e2ruzqe2ruzqe2ru.png',
      2: '/Тајната на заборавената градина/хронолоска слагалка/2. Gemini_Generated_Image_bhirglbhirglbhir.png',
      3: '/Тајната на заборавената градина/хронолоска слагалка/3. Gemini_Generated_Image_cla1m9cla1m9cla1.png',
      4: '/Тајната на заборавената градина/хронолоска слагалка/4. Gemini_Generated_Image_ct8ognct8ognct8o.png',
      5: '/Тајната на заборавената градина/хронолоска слагалка/5. Gemini_Generated_Image_seoqszseoqszseoq.png',
      6: '/Тајната на заборавената градина/хронолоска слагалка/6. Gemini_Generated_Image_umpy9kumpy9kumpy.png',
      7: '/Тајната на заборавената градина/хронолоска слагалка/7. Gemini_Generated_Image_38kc7q38kc7q38kc.png'
    },
    coloring: {
      1: '/Тајната на заборавената градина/Coloring book/1. Gemini_Generated_Image_grz5ktgrz5ktgrz5.png',
      2: '/Тајната на заборавената градина/Coloring book/2. Gemini_Generated_Image_mk2r1fmk2r1fmk2r.png',
      3: '/Тајната на заборавената градина/Coloring book/3. Gemini_Generated_Image_bjc0r5bjc0r5bjc0.png',
      4: '/Тајната на заборавената градина/Coloring book/4. Gemini_Generated_Image_eo29v3eo29v3eo29.png',
      5: '/Тајната на заборавената градина/Coloring book/5. Gemini_Generated_Image_apfx4rapfx4rapfx.png',
      6: '/Тајната на заборавената градина/Coloring book/6. Gemini_Generated_Image_f60h2gf60h2gf60h.png',
      7: '/Тајната на заборавената градина/Coloring book/7. Gemini_Generated_Image_h13hv9h13hv9h13h.png'
    }
  }
};

export default imgs;
