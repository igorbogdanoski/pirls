// Image paths for all stories — add new story image keys here
const imgs = {
  shovel: {
    main: 'Gemini_Generated_Image_ed1hrfed1hrfed1h.png',
    happy: 'Gemini_Generated_Image_ntjzjxntjzjxntjz.png',
    comfort: 'Gemini_Generated_Image_gem9rdgem9rdgem9.png'
  },
  lynx: {
    main: 'Gemini_Generated_Image_a0xj05a0xj05a0xj.png',
    camera: 'Gemini_Generated_Image_8i86cr8i86cr8i86.png',
    cave: 'Gemini_Generated_Image_dk2d2wdk2d2wdk2d.png'
  },
  kite: {
    messy: 'Gemini_Generated_Image_ovlkzqovlkzqovlk.png',
    workshop: 'Gemini_Generated_Image_2fxzxn2fxzxn2fxz.png',
    flying: 'Gemini_Generated_Image_22q3ph22q3ph22q3.png'
  },
  watchmaker: {
    sad: 'Gemini_Generated_Image_93tlph93tlph93tl.png',
    dog: 'Gemini_Generated_Image_4gmp3n4gmp3n4gmp.png',
    workshop: 'Gemini_Generated_Image_1rt2501rt2501rt2.png'
  },
  octopus: {
    swimming: 'Gemini_Generated_Image_y8z77sy8z77sy8z7.png',
    camouflage: 'Gemini_Generated_Image_ftap80ftap80ftap.png',
    learning: 'Gemini_Generated_Image_jlxu41jlxu41jlxu.png',
    keeper: 'Gemini_Generated_Image_ly489vly489vly48.png'
  },
  baba: {
    village: 'Gemini_Generated_Image_ubtmx7ubtmx7ubtm.png',
    sad: 'Gemini_Generated_Image_66pz9466pz9466pz.png',
    idea: 'Gemini_Generated_Image_hx2q1vhx2q1vhx2q.png',
    roof: 'Gemini_Generated_Image_b0mh53b0mh53b0mh.png',
    q8: 'Gemini_Generated_Image_nnfmepnnfmepnnfm.png'
  },
  kaja: {
    lab: 'Gemini_Generated_Image_pa6gs9pa6gs9pa6g.png',
    comfort: 'Gemini_Generated_Image_mpue84mpue84mpue.png',
    feeder: 'Gemini_Generated_Image_irdou7irdou7irdo.png'
  },
  chest: {
    porch: 'Gemini_Generated_Image_svlevhsvlevhsvle.png',
    finding: 'Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png',
    story: 'Gemini_Generated_Image_tidjntidjntidjnt.png'
  },
  rabbit: {
    startle: 'Gemini_Generated_Image_j12s9rj12s9rj12s.png',
    lion: 'Gemini_Generated_Image_nnfx6onnfx6onnfx.png',
    relief: 'Gemini_Generated_Image_1hdc6w1hdc6w1hdc.png'
  },
  puffins: {
    cliffs: 'Gemini_Generated_Image_6rliq26rliq26rli.png',
    closeup: 'Gemini_Generated_Image_3eunt73eunt73eun.png',
    rescue: 'Gemini_Generated_Image_3nal113nal113nal.png',
    release: 'Gemini_Generated_Image_s0veo8s0veo8s0ve.png'
  },
  eagle: {
    find: 'Gemini_Generated_Image_x2nnwgx2nnwgx2nn.png',
    yard: 'Gemini_Generated_Image_u4kacou4kacou4ka.png',
    dawn: 'Gemini_Generated_Image_ixkjpdixkjpdixkj.png',
    flight: 'Gemini_Generated_Image_ac4r2pac4r2pac4r.png'
  },
  pita: {
    kitchen: 'Gemini_Generated_Image_cfaajhcfaajhcfaa.png',
    bike: 'Gemini_Generated_Image_akd8v0akd8v0akd8.png',
    dinner: 'Gemini_Generated_Image_mycd13mycd13mycd.png',
    friends: 'Gemini_Generated_Image_bn489hbn489hbn48.png'
  },
  hiking: {
    trail:      'Пешачење приказна/1. Gemini_Generated_Image_5x7tln5x7tln5x7t.png',
    waterfall:  'Пешачење приказна/2. Gemini_Generated_Image_arh7tsarh7tsarh7.png',
    essentials: 'Пешачење приказна/3. Gemini_Generated_Image_w6oeyrw6oeyrw6oe.png',
    animals:    'Пешачење приказна/4. Gemini_Generated_Image_ln42o0ln42o0ln42.png'
  },
  fossil: {
    palissy:   'Заб приказна/1. Gemini_Generated_Image_mo45g6mo45g6mo45.png',
    mantell:   'Заб приказна/2. Gemini_Generated_Image_6p7e426p7e426p7e.png',
    wrongdino: 'Заб приказна/3. Gemini_Generated_Image_a31784a31784a317.png',
    iguanodon: 'Заб приказна/4. Gemini_Generated_Image_c5p20ic5p20ic5p2.png'
  },
  pot: {
    seed: 'Gemini_Generated_Image_einjoqeinjoqeinj.png',
    empty: 'Gemini_Generated_Image_b3y8c8b3y8c8b3y8.png',
    palace: 'Gemini_Generated_Image_o1o795o1o795o1o7.png',
    emperor: 'Gemini_Generated_Image_1s3ljj1s3ljj1s3l.png'
  },
  lakestar: {
    finding: 'Gemini_Generated_Image_cjndpgcjndpgcjnd.png',
    working: 'Gemini_Generated_Image_su41m5su41m5su41.png',
    pier: 'Gemini_Generated_Image_vjdvnvjdvnvjdvnv.png',
    rescue: 'Gemini_Generated_Image_ynhufmynhufmynhu.png'
  },
  lambe: {
    house: 'Gemini_Generated_Image_arl5jlarl5jlarl5.png',
    gluing: 'Gemini_Generated_Image_n6rwy4n6rwy4n6rw.png',
    panic: 'Gemini_Generated_Image_gusm51gusm51gusm.png',
    coffee: 'Gemini_Generated_Image_tavd0ktavd0ktavd.png'
  },
  lighthouse: {
    village: './Светлината на Ирското Море/1. Gemini_Generated_Image_h7baeh7baeh7baeh.png',
    fog:     './Светлината на Ирското Море/2. Gemini_Generated_Image_xe0jvfxe0jvfxe0j.png',
    candle:  './Светлината на Ирското Море/3. Gemini_Generated_Image_tqa2mutqa2mutqa2.png',
    lantern: './Светлината на Ирското Море/4. Gemini_Generated_Image_qcudr8qcudr8qcud.png',
  },
  forgotten_garden: {
    p1: './Тајната на заборавената градина/1. Gemini_Generated_Image_bhirglbhirglbhir.png',
    p2: './Тајната на заборавената градина/2. Gemini_Generated_Image_ct8ognct8ognct8o.png',
    p3: './Тајната на заборавената градина/3. Gemini_Generated_Image_umpy9kumpy9kumpy.png',
    p4: './Тајната на заборавената градина/4. Gemini_Generated_Image_38kc7q38kc7q38kc.png',
  },
};

export default imgs;
