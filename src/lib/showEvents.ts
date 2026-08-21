/** Ritual de Concreto: arquivos de palco mantêm a origem por evento e se abrem apenas sob demanda. */
export type ShowEvent = {
  number: string;
  cover: string;
  pt: { title: string; note: string };
  en: { title: string; note: string };
  images: readonly string[];
};

export const showEvents: readonly ShowEvent[] = [
  {
    number: "01",
    cover: "/manus-storage/monareta-cycles-07_6e81257e.png",
    pt: { title: "MONARETA CYCLES — 1º SHOW", note: "ARQUIVO DE PALCO / ORIGINAIS" },
    en: { title: "MONARETA CYCLES — 1ST SHOW", note: "LIVE ARCHIVE / ORIGINALS" },
    images: ["/manus-storage/monareta-cycles-01_b92491c4.png", "/manus-storage/monareta-cycles-02_20432c2e.png", "/manus-storage/monareta-cycles-03_104f3323.png", "/manus-storage/monareta-cycles-04_04ba855b.png", "/manus-storage/monareta-cycles-05_50ee786b.png", "/manus-storage/monareta-cycles-06_89b1e328.png", "/manus-storage/monareta-cycles-07_6e81257e.png", "/manus-storage/monareta-cycles-08_98f7db34.png", "/manus-storage/monareta-cycles-09_0b84b1cf.png", "/manus-storage/monareta-cycles-10_2ae73b2d.png"],
  },
  {
    number: "02",
    cover: "/manus-storage/FotosAREDESESSIONS.png(5)_95a0309f.png",
    pt: { title: "A REDE SESSIONS", note: "SESSÃO AO VIVO / ORIGINAIS" },
    en: { title: "A REDE SESSIONS", note: "LIVE SESSION / ORIGINALS" },
    images: ["/manus-storage/FotosAREDESESSIONS_8dfd17fc.png", "/manus-storage/FotosAREDESESSIONS.png(1)_3b4d8a6b.png", "/manus-storage/FotosAREDESESSIONS.png(2)_643a7c8f.png", "/manus-storage/FotosAREDESESSIONS.png(3)_dd3e0cbf.png", "/manus-storage/FotosAREDESESSIONS.png(4)_6e0099ac.png", "/manus-storage/FotosAREDESESSIONS.png(5)_95a0309f.png", "/manus-storage/FotosAREDESESSIONS.png(6)_cbfdf709.png", "/manus-storage/FotosAREDESESSIONS.png(7)_74a4d273.png", "/manus-storage/FotosAREDESESSIONS.png(8)_1cfa354d.png"],
  },
  {
    number: "03",
    cover: "/manus-storage/segura-peao-02_0b1a5e9e.png",
    pt: { title: "3º SEGURA PEÃO", note: "ARQUIVO DE SHOW / ORIGINAIS" },
    en: { title: "3RD SEGURA PEÃO", note: "SHOW ARCHIVE / ORIGINALS" },
    images: ["/manus-storage/segura-peao-01_8d0eefca.png", "/manus-storage/segura-peao-02_0b1a5e9e.png", "/manus-storage/segura-peao-03_46285c43.png", "/manus-storage/segura-peao-04_53525dcf.png", "/manus-storage/segura-peao-05_8f7cdf43.png", "/manus-storage/segura-peao-06_d309c7e6.png", "/manus-storage/segura-peao-07_94541703.png", "/manus-storage/segura-peao-08_337bae17.png", "/manus-storage/segura-peao-09_4347f29d.png", "/manus-storage/segura-peao-10_7650e466.png", "/manus-storage/segura-peao-11_a4507376.png", "/manus-storage/segura-peao-12_34a8a870.png", "/manus-storage/segura-peao-13_ea17523f.png"],
  },
  {
    number: "04",
    cover: "/manus-storage/FotosKWARACYFESTIVAL(6)_2ed369e4.png",
    pt: { title: "KWARACY FESTIVAL", note: "FESTIVAL / ORIGINAIS" },
    en: { title: "KWARACY FESTIVAL", note: "FESTIVAL / ORIGINALS" },
    images: ["/manus-storage/FotosKWARACYFESTIVAL(1)_fcf7d5aa.png", "/manus-storage/FotosKWARACYFESTIVAL(2)_0ddf903f.png", "/manus-storage/FotosKWARACYFESTIVAL(3)_a0343bd2.png", "/manus-storage/FotosKWARACYFESTIVAL(4)_b65a33ab.png", "/manus-storage/FotosKWARACYFESTIVAL(5)_d915caa1.png", "/manus-storage/FotosKWARACYFESTIVAL(6)_2ed369e4.png", "/manus-storage/FotosKWARACYFESTIVAL(7)_236e2df9.png", "/manus-storage/FotosKWARACYFESTIVAL(8)_09ed71fd.png"],
  },
  {
    number: "05",
    cover: "/manus-storage/FotosAGENTEANTILARANJA_07_tratada_8cf38bbf.webp",
    pt: { title: "AGENTE ANTI-LARANJA", note: "EDITORIAL TRATADO / AO VIVO" },
    en: { title: "AGENTE ANTI-LARANJA", note: "TREATED EDITORIAL / LIVE" },
    images: ["/manus-storage/FotosAGENTEANTILARANJA_01_tratada_d149bfb7.webp", "/manus-storage/FotosAGENTEANTILARANJA_02_tratada_0749817c.webp", "/manus-storage/FotosAGENTEANTILARANJA_03_tratada_cf25563f.webp", "/manus-storage/FotosAGENTEANTILARANJA_04_tratada_70cbe4f5.webp", "/manus-storage/FotosAGENTEANTILARANJA_05_tratada_02754a72.webp", "/manus-storage/FotosAGENTEANTILARANJA_06_tratada_e18bd5c4.webp", "/manus-storage/FotosAGENTEANTILARANJA_07_tratada_8cf38bbf.webp", "/manus-storage/FotosAGENTEANTILARANJA_10_tratada_63cfb80d.webp", "/manus-storage/FotosAGENTEANTILARANJA_11_tratada_74583f6f.webp"],
  },
  {
    number: "06",
    cover: "/manus-storage/FotosROCKNORECINTO_01_tratada_aa8ad440.webp",
    pt: { title: "ROCK NO RECINTO", note: "REGISTRO TRATADO / ENSAIO" },
    en: { title: "ROCK AT THE VENUE", note: "TREATED DOCUMENTATION / REHEARSAL" },
    images: ["/manus-storage/FotosROCKNORECINTO_01_tratada_aa8ad440.webp", "/manus-storage/FotosROCKNORECINTO_07_tratada_9f95244e.webp", "/manus-storage/FotosROCKNORECINTO_12_tratada_d0116c08.webp", "/manus-storage/FotosROCKNORECINTO_14_tratada_12ecc55f.webp", "/manus-storage/FotosROCKNORECINTO_23_tratada_43d01430.webp", "/manus-storage/FotosROCKNORECINTO_33_tratada_2aa0588e.webp", "/manus-storage/FotosROCKNORECINTO_66_tratada_aaac2f4e.webp", "/manus-storage/FotosROCKNORECINTO_70_tratada_cb05f8d2.webp", "/manus-storage/FotosROCKNORECINTO_76_tratada_15e2128b.webp", "/manus-storage/FotosROCKNORECINTO_80_tratada_36026950.webp"],
  },
];
