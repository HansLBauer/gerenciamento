var UBS = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all2) => {
    for (var name in all2)
      __defProp(target, name, { get: all2[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // server/app.js
  var app_exports = {};
  __export(app_exports, {
    apiGet: () => apiGet,
    apiPost: () => apiPost,
    cron: () => cron,
    flushPush: () => flushPush,
    install: () => install,
    recover: () => recover
  });

  // src/daily-care.js
  var shortcuts = ["MMG", "CO", "RX Torax AP+P", "Laboratoriais", "Renovo Receita", "ECG", "Colono", "EDA", "USG ABD Total", "USG TV", "MRPA", "Dextro", "LME"];
  var clean = (code) => String(code).replace(/[^A-Z0-9]/gi, "").toUpperCase();
  var matches = (items, pattern) => (items || []).some((item) => pattern.test(clean(item.code)));
  function diabetesFields(info) {
    return matches(info.ciap, /^(T89|T90|W85)$/) || (info.cid || []).some((item) => {
      const code = clean(item.code);
      if (/^(E1[0-4]|O24|P702|N083)/.test(code)) return true;
      const label = (item.label || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return /diabet/.test(label) && !/insipid|historia|antecedente|rastreamento|filho de|mae diabet/.test(label);
    });
  }

  // src/almox.js
  var almox_default = [
    {
      "id": "alm-8",
      "row": 8,
      "number": 1,
      "name": "Abaixador de l\xEDngua (esp\xE1tula de  madeira)",
      "unit": "unidade",
      "initial": 1300,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-9",
      "row": 9,
      "number": 2,
      "name": "\xC1gua destilada para autoclave - gal\xE3o com 5 litros.",
      "unit": "gal\xE3o",
      "initial": null,
      "note": "odonto",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-10",
      "row": 10,
      "number": 3,
      "name": "\xC1gua Oxigenada 10 volumes (Per\xF3xido de Hidrog\xEAnio 3%) - Almotolia contendo 100 mL.",
      "unit": "almotolia",
      "initial": 1,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-11",
      "row": 11,
      "number": 4,
      "name": "Agulha Hipod\xE9rmica descart\xE1vel, calibre 13x4,5.",
      "unit": "unidade",
      "initial": 900,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-12",
      "row": 12,
      "number": 5,
      "name": "Agulha Hipod\xE9rmica descart\xE1vel, calibre 20x5,5.",
      "unit": "unidade",
      "initial": 1100,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-13",
      "row": 13,
      "number": 6,
      "name": "Agulha Hipod\xE9rmica descart\xE1vel, calibre 25x7.",
      "unit": "unidade",
      "initial": 1500,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-14",
      "row": 14,
      "number": 7,
      "name": "Agulha Hipod\xE9rmica descart\xE1vel, calibre 25x8.",
      "unit": "unidade",
      "initial": 2e3,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-15",
      "row": 15,
      "number": 8,
      "name": "Agulha Hipod\xE9rmica descart\xE1vel, calibre 30x7.",
      "unit": "unidade",
      "initial": 1600,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-16",
      "row": 16,
      "number": 9,
      "name": "Agulha Hipod\xE9rmica descart\xE1vel, calibre 30x8.",
      "unit": "unidade",
      "initial": 600,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-17",
      "row": 17,
      "number": 10,
      "name": "Agulha Hipod\xE9rmica descart\xE1vel, calibre 40x12.",
      "unit": "unidade",
      "initial": 400,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-18",
      "row": 18,
      "number": 11,
      "name": "\xC1lcool 70 Hospitalar. Produto para uso profissional. Em frasco pl\xE1stico, contendo 100 ml",
      "unit": "almotolia",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-19",
      "row": 19,
      "number": 12,
      "name": "\xC1lcool Gel 70 Hospitalar. Em frasco pl\xE1stico, contendo entre 300 e 600 gramas.",
      "unit": "frasco",
      "initial": 27,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-20",
      "row": 20,
      "number": 13,
      "name": "Algod\xE3o Hidr\xF3filo.",
      "unit": "pacote",
      "initial": 12,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-21",
      "row": 21,
      "number": 14,
      "name": "Almotolia de plastico transparente, resistente, capacidade 250 mL.",
      "unit": "unidade",
      "initial": 13,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-22",
      "row": 22,
      "number": 15,
      "name": "Almotolia de plastico \xC2mbar, resistente, capacidade 250 mL.",
      "unit": "unidade",
      "initial": 2,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-23",
      "row": 23,
      "number": 16,
      "name": "Aparelho de barbear descart\xE1vel.",
      "unit": "unidade",
      "initial": 34,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-24",
      "row": 24,
      "number": 17,
      "name": "Atadura de crepe de algod\xE3o cru, tipo II, 06 cm x 1,80 m.",
      "unit": "d\xFAzia",
      "initial": 20,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-25",
      "row": 25,
      "number": 18,
      "name": "Atadura de crepe de algod\xE3o cru, tipo II, 10 cm x 1,80 m.",
      "unit": "d\xFAzia",
      "initial": 10,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-26",
      "row": 26,
      "number": 19,
      "name": "Atadura de crepe de algod\xE3o cru, tipo II, 15 cm x 1,80 m.",
      "unit": "d\xFAzia",
      "initial": 9,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-27",
      "row": 27,
      "number": 20,
      "name": "Avental Descart\xE1vel, sem mangas (tipo camisola). Para uso em exames - cor rosa ou azul",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-28",
      "row": 28,
      "number": 21,
      "name": "Avental Descart\xE1vel, manga longa e punho de el\xE1stico, para uso ambulatorial.",
      "unit": "unidade",
      "initial": null,
      "note": "odonto",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-29",
      "row": 29,
      "number": 22,
      "name": "Bolsa est\xE9ril para coleta de urina em Sonda Foley (sistema fechado). Capacidade, aproximada, de 2.000 mL.",
      "unit": "unidade",
      "initial": 7,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-30",
      "row": 30,
      "number": 23,
      "name": "Cadar\xE7o sarjado - Rolo com 10 metros.",
      "unit": "rolo",
      "initial": 4,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-31",
      "row": 31,
      "number": 24,
      "name": "Caixa coletora de material perfuro-cortante, com capacidade de 13 litros.",
      "unit": "unidade",
      "initial": 9,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-32",
      "row": 32,
      "number": 25,
      "name": "C\xE2nula para Traqueostomia n\xBA 2 fabricada em a\xE7o inoxid\xE1vel, esteriliz\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-33",
      "row": 33,
      "number": 26,
      "name": "C\xE2nula para Traqueostomia n\xBA 3 com CUFF, pl\xE1stica, est\xE9ril, descart\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-34",
      "row": 34,
      "number": 27,
      "name": "C\xE2nula para Traqueostomia n\xBA 3,  fabricada em a\xE7o inoxid\xE1vel, esteriliz\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-35",
      "row": 35,
      "number": 28,
      "name": "C\xE2nula para Traqueostomia n\xBA 4 com CUFF, pl\xE1stica, est\xE9ril, descart\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-36",
      "row": 36,
      "number": 29,
      "name": "C\xE2nula para Traqueostomia n\xBA 4,  fabricada em a\xE7o inoxid\xE1vel, esteriliz\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-37",
      "row": 37,
      "number": 30,
      "name": "C\xE2nula para Traqueostomia n\xBA 5 com CUFF, pl\xE1stica, est\xE9ril, descart\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-38",
      "row": 38,
      "number": 31,
      "name": "C\xE2nula para Traqueostomia n\xBA 5,  fabricada em a\xE7o inoxid\xE1vel, esteriliz\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-39",
      "row": 39,
      "number": 32,
      "name": "C\xE2nula para Traqueostomia n\xBA 6 com CUFF, pl\xE1stica, est\xE9ril, descart\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-40",
      "row": 40,
      "number": 33,
      "name": "C\xE2nula para Traqueostomia n\xBA 8 com CUFF, pl\xE1stica, est\xE9ril, descart\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-41",
      "row": 41,
      "number": 34,
      "name": "C\xE2nula para Traqueostomia n\xBA 9 com CUFF, pl\xE1stica, est\xE9ril, descart\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-42",
      "row": 42,
      "number": 35,
      "name": "Cateter nasal tipo \xF3culos para oxig\xEAnio, infantil.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-43",
      "row": 43,
      "number": 36,
      "name": "Cateter nasal tipo \xF3culos para oxig\xEAnio, adulto.",
      "unit": "unidade",
      "initial": 8,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-44",
      "row": 44,
      "number": 37,
      "name": "Cateter venoso perif\xE9rico n\xBA 14, com dispositivo de seguran\xE7a, est\xE9ril.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-45",
      "row": 45,
      "number": 38,
      "name": "Cateter venoso perif\xE9rico n\xBA 16, com dispositivo de seguran\xE7a, est\xE9ril.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-46",
      "row": 46,
      "number": 39,
      "name": "Cateter venoso perif\xE9rico n\xBA 18, com dispositivo de seguran\xE7a, est\xE9ril.",
      "unit": "unidade",
      "initial": 8,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-47",
      "row": 47,
      "number": 40,
      "name": "Cateter venoso perif\xE9rico n\xBA 20, com dispositivo de seguran\xE7a, est\xE9ril.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-48",
      "row": 48,
      "number": 41,
      "name": "Cateter venoso perif\xE9rico n\xBA 22, com dispositivo de seguran\xE7a, est\xE9ril.",
      "unit": "unidade",
      "initial": 500,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-49",
      "row": 49,
      "number": 42,
      "name": "Cateter venoso perif\xE9rico n\xBA 24, com dispositivo de seguran\xE7a, est\xE9ril.",
      "unit": "unidade",
      "initial": 300,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-50",
      "row": 50,
      "number": 43,
      "name": "Clamp umbilical confeccionado em PVC, flex\xEDvel,at\xF3xico, esterilizado.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-51",
      "row": 51,
      "number": 44,
      "name": "Clorexidina 0,2%. Solu\xE7\xE3o aquosa, antiss\xE9ptico dermatol\xF3gico para uso hospitalar.",
      "unit": "almotolia",
      "initial": 12,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-52",
      "row": 52,
      "number": 45,
      "name": "Clorexidina 0,5%. Solu\xE7\xE3o alco\xF3lica, antiss\xE9ptico dermatol\xF3gico para uso hospitalar.",
      "unit": "almotolia",
      "initial": 10,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-53",
      "row": 53,
      "number": 46,
      "name": "Clorexidina 2%. Solu\xE7\xE3o Degermante com tensoativos.",
      "unit": "almotolia",
      "initial": 4,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-54",
      "row": 54,
      "number": 47,
      "name": "Colar Cervical -  tamanho Neonatal",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-55",
      "row": 55,
      "number": 48,
      "name": "Colar Cervical -  tamanho Pequeno",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-56",
      "row": 56,
      "number": 49,
      "name": "Colar Cervical -  tamanho M\xE9dio",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-57",
      "row": 57,
      "number": 50,
      "name": "Colar Cervical -  tamanho Grande",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-58",
      "row": 58,
      "number": 51,
      "name": "Coletor Pl\xE1stico EST\xC9RIL, para coleta de escarro ou urina (coletor universal), com capacidade para 80 mL.",
      "unit": "Unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-59",
      "row": 59,
      "number": 52,
      "name": "Coletor pl\xE1stico para secre\xE7\xF5es e urina (sistema aberto), capacidade aproximada 1.200 mL.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-60",
      "row": 60,
      "number": 53,
      "name": "Compressa de Gaze EST\xC9RIL hidr\xF3fila. Pacote com 10 unidades.",
      "unit": "pacote",
      "initial": 1e3,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-61",
      "row": 61,
      "number": 54,
      "name": "Compressa de Gaze Tipo Queijo hidr\xF3fila.",
      "unit": "rolo",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-62",
      "row": 62,
      "number": 55,
      "name": "Compressa de Gaze N\xC3O EST\xC9RIL - pacote c/ 500 unidades",
      "unit": "pacote",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-63",
      "row": 63,
      "number": 56,
      "name": "Compressa para Curativo Cir\xFArgico 15cm x 30cm (Chuma\xE7o), Est\xE9ril, Descart\xE1vel.",
      "unit": "pacote",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-64",
      "row": 64,
      "number": 57,
      "name": "Conjunto para Nebuliza\xE7\xE3o cont\xEDnua. Composto por copo\xA0nebulizador\xA0de 500 mL.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-65",
      "row": 65,
      "number": 58,
      "name": "Copo Aspirador (Tipo Venturi) para rede canalizada de g\xE1s, para uso em ar comprimido (AR220).",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-66",
      "row": 66,
      "number": 59,
      "name": "Copo Umidificador para Oxig\xEAnio. Frasco em PVC de 250 mL.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-67",
      "row": 67,
      "number": 60,
      "name": "Detergente Multi-enzim\xE1tico n\xE3o espumante (protease, peptidase, lipase, carbohidrase, amilase e celulase).",
      "unit": "gal\xE3o",
      "initial": null,
      "note": "ODONTO ",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-68",
      "row": 68,
      "number": 61,
      "name": "Dispositivo intravenoso (scalp), n\xB0 19.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-69",
      "row": 69,
      "number": 62,
      "name": "Dispositivo intravenoso (scalp), n\xB0 21.",
      "unit": "unidade",
      "initial": 200,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-70",
      "row": 70,
      "number": 63,
      "name": "Dispositivo intravenoso (scalp), n\xB0 23.",
      "unit": "unidade",
      "initial": 200,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-71",
      "row": 71,
      "number": 64,
      "name": "Dispositivo intravenoso (scalp), n\xB0 25.",
      "unit": "unidade",
      "initial": 100,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-72",
      "row": 72,
      "number": 65,
      "name": "Dispositivo intravenoso (scalp), n\xB0 27.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-73",
      "row": 73,
      "number": 66,
      "name": "Dispositivo para incontin\xEAncia urin\xE1ria n\xB0 4 masculino, confeccionado em SILICONE.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-74",
      "row": 74,
      "number": 67,
      "name": "Dispositivo para incontin\xEAncia urin\xE1ria n\xB0 4, masculino, confeccionado em puro l\xE1tex natural.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-75",
      "row": 75,
      "number": 68,
      "name": "Dispositivo para incontin\xEAncia urin\xE1ria n\xB0 5 masculino, confeccionado em SILICONE",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-76",
      "row": 76,
      "number": 69,
      "name": "Dispositivo para incontin\xEAncia urin\xE1ria n\xB0 5, masculino, confeccionado em puro l\xE1tex natural.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-77",
      "row": 77,
      "number": 70,
      "name": "Dispositivo para incontin\xEAncia urin\xE1ria n\xB0 6 masculino, confeccionado em SILICONE",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-78",
      "row": 78,
      "number": 71,
      "name": "Dispositivo para incontin\xEAncia urin\xE1ria n\xB0 6, masculino, confeccionado em puro l\xE1tex natural.",
      "unit": "unidade",
      "initial": 9,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-79",
      "row": 79,
      "number": 72,
      "name": "Dispositivo para incontin\xEAncia urin\xE1ria n\xB0 7 masculino, confeccionado em SILICONE",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-80",
      "row": 80,
      "number": 73,
      "name": "Dispositivo para incontin\xEAncia urin\xE1ria n\xB0 7, masculino, confeccionado em puro l\xE1tex natural.",
      "unit": "unidade",
      "initial": 79,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-81",
      "row": 81,
      "number": 74,
      "name": "DIU - Dispositivo Intra Uterino",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-82",
      "row": 82,
      "number": 75,
      "name": "Eletrodo para equipamento m\xE9dico pr\xE9-cordial, para uso em aparelho de eletrocardi\xF3grafo, sem pera.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-83",
      "row": 83,
      "number": 76,
      "name": "Eletrodos descart\xE1veis para monitoriza\xE7\xE3o card\xEDaca.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-84",
      "row": 84,
      "number": 77,
      "name": "Equipo nutri\xE7\xE3o enteral em pvc cristal, conector luer com tampa, est\xE9ril, descart\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-85",
      "row": 85,
      "number": 78,
      "name": "Equipo para Nutri\xE7\xE3o Enteral, conector escalonado com tampa; est\xE9ril; descart\xE1vel.",
      "unit": "unidade",
      "initial": 300,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-86",
      "row": 86,
      "number": 79,
      "name": "Equipo para Infus\xF5es Parenterais MACROGOTAS.",
      "unit": "unidade",
      "initial": 300,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-87",
      "row": 87,
      "number": 80,
      "name": "Escova Cervical para Colpocitologia.",
      "unit": "unidade",
      "initial": 300,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-88",
      "row": 88,
      "number": 81,
      "name": "Esfigmoman\xF4metro anal\xF3gico de bra\xE7o, tamanho adulto.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-89",
      "row": 89,
      "number": 82,
      "name": "Esfigmoman\xF4metro anal\xF3gico de bra\xE7o, tamanho infantil.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-90",
      "row": 90,
      "number": 83,
      "name": "Esfigmoman\xF4metro anal\xF3gico de bra\xE7o, tamanho Obeso",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-91",
      "row": 91,
      "number": 84,
      "name": "Esfigmoman\xF4metro digital de bra\xE7o, semi-autom\xE1tico.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-92",
      "row": 92,
      "number": 85,
      "name": "Esparadrapo Imperme\xE1vel.",
      "unit": "unidade",
      "initial": 50,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-93",
      "row": 93,
      "number": 86,
      "name": "Esp\xE1tula de Ayre. Confeccionada em madeira resistente.",
      "unit": "unidade",
      "initial": 900,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-94",
      "row": 94,
      "number": 87,
      "name": "Esp\xE9culo vaginal descart\xE1vel tamanho Grande.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-95",
      "row": 95,
      "number": 88,
      "name": "Esp\xE9culo vaginal descart\xE1vel tamanho M\xE9dio.",
      "unit": "unidade",
      "initial": 300,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-96",
      "row": 96,
      "number": 89,
      "name": "Esp\xE9culo vaginal descart\xE1vel tamanho Pequeno.",
      "unit": "unidade",
      "initial": 20,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-97",
      "row": 97,
      "number": 90,
      "name": "Estetosc\xF3pio Adulto.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-98",
      "row": 98,
      "number": 91,
      "name": "Estetosc\xF3pio Infantil.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-99",
      "row": 99,
      "number": 92,
      "name": "Fio de Sutura Nylon 2-0 c/ Agulha triangular, cuticular - Caixa contendo24 unidades.",
      "unit": "caixa",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-100",
      "row": 100,
      "number": 93,
      "name": "Fio de Sutura Nylon 3-0 c/ Agulha triangular, cuticular - Caixa contendo 24 unidades.",
      "unit": "caixa",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-101",
      "row": 101,
      "number": 94,
      "name": "Fio de Sutura Nylon 4-0 c/ Agulha triangular, cuticular - Caixa contendo 24 unidades.",
      "unit": "caixa",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-102",
      "row": 102,
      "number": 95,
      "name": "Fio de Sutura Nylon 5-0 c/ Agulha triangular, cuticular - Caixa contendo 24 unidades.",
      "unit": "caixa",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-103",
      "row": 103,
      "number": 96,
      "name": "Fio guia para intuba\xE7\xE3o Adulto.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-104",
      "row": 104,
      "number": 97,
      "name": "Fio guia para intuba\xE7\xE3o Infantil.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-105",
      "row": 105,
      "number": 98,
      "name": "Fita Adesiva Hospitalar de 16 mm x 50 metros",
      "unit": "rolo",
      "initial": 22,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-106",
      "row": 106,
      "number": 99,
      "name": "Fita Hipoalerg\xEAnica para curativo (Micropore).",
      "unit": "rolo",
      "initial": 50,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-107",
      "row": 107,
      "number": 100,
      "name": "Fita para Autoclave indicadora de esteriliza\xE7\xE3o a vapor.",
      "unit": "rolo",
      "initial": null,
      "note": "odonto",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-108",
      "row": 108,
      "number": 101,
      "name": "Fixador para L\xE2mina Citol\xF3gica - frasco aerosol contendo 100 mL de solu\xE7\xE3o fixadora.",
      "unit": "frasco",
      "initial": null,
      "note": "em falta",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-109",
      "row": 109,
      "number": 102,
      "name": "Flux\xF4metro para rede canalizada de oxig\xEAnio medicinal.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-110",
      "row": 110,
      "number": 103,
      "name": "Flux\xF4metro para rede canalizada de ar comprimido.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-111",
      "row": 111,
      "number": 104,
      "name": "Frasco para Nutri\xE7\xE3o enteral est\xE9ril.",
      "unit": "frasco",
      "initial": 800,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-112",
      "row": 112,
      "number": 105,
      "name": "Gel Condutor para realiza\xE7\xE3o de Exames.",
      "unit": "frasco",
      "initial": 13,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-113",
      "row": 113,
      "number": 106,
      "name": "Gel Lubrificante \xCDntimo",
      "unit": "unidade",
      "initial": 80,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-114",
      "row": 114,
      "number": 107,
      "name": "H\xE1stes pl\xE1sticas flex\xEDveis e inquebr\xE1veis, com pontas de algod\xE3o 100% puro.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-115",
      "row": 115,
      "number": 108,
      "name": "Hipoclorito de S\xF3dio 5% (Concentrado), desinfec\xE7\xE3o de surpef\xEDcies fixas e artigos e acess\xF3rios hospitalares.",
      "unit": "gal\xE3o",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-116",
      "row": 116,
      "number": 109,
      "name": "Inv\xF3lucro para caixa/pacotes de n\xE3o tecido composto por tr\xEAs camadas de polipropileno, tamanho 50 x 50 cm.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-117",
      "row": 117,
      "number": 110,
      "name": "Kit dreno de torax - de 40cm (comprimento) x 24mm (di\xE2metro), frasco com capacidade para 1.000 mL.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-118",
      "row": 118,
      "number": 111,
      "name": "Kit dreno de t\xF3rax - de 45cm (comprimento) x 32mm (di\xE2metro), frasco com capacidade para 2.000 mL.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-119",
      "row": 119,
      "number": 112,
      "name": "Kit dreno de torax - de 40cm (comprimento) x 10mm (di\xE2metro), frasco com capacidade para 500 mL.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-120",
      "row": 120,
      "number": 113,
      "name": "Kit Eletrodo em forma de pin\xE7a (tipo cardioclip).",
      "unit": "pacote",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-121",
      "row": 121,
      "number": 114,
      "name": "L\xE2mina Citol\xF3gica, para microsc\xF3pio, em vidro. Caixa contendo 100 l\xE2minas.",
      "unit": "caixa",
      "initial": 4,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-122",
      "row": 122,
      "number": 115,
      "name": "L\xE2mina Descart\xE1vel de Bisturi n\xB0 11",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-123",
      "row": 123,
      "number": 116,
      "name": "L\xE2mina Descart\xE1vel de Bisturi n\xB0 12.",
      "unit": "unidade",
      "initial": 300,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-124",
      "row": 124,
      "number": 117,
      "name": "L\xE2mina Descart\xE1vel de Bisturi n\xB0 15.",
      "unit": "unidade",
      "initial": 200,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-125",
      "row": 125,
      "number": 118,
      "name": "L\xE2mina Descart\xE1vel de Bisturi n\xB0 22.",
      "unit": "unidade",
      "initial": 200,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-126",
      "row": 126,
      "number": 119,
      "name": "Len\xE7ol de Papel,  Descart\xE1vel.",
      "unit": "rolo",
      "initial": 60,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-127",
      "row": 127,
      "number": 120,
      "name": "Limpador Desinfetante de Quatern\xE1rio. Para uso hospitalar.",
      "unit": "frasco",
      "initial": null,
      "note": ".",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-128",
      "row": 128,
      "number": 121,
      "name": "Luva Cir\xFArgica Descart\xE1vel, Est\xE9ril, tam. 6,0.",
      "unit": "par",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-129",
      "row": 129,
      "number": 122,
      "name": "Luva Cir\xFArgica Descart\xE1vel, Est\xE9ril, tam. 6,5.",
      "unit": "par",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-130",
      "row": 130,
      "number": 123,
      "name": "Luva Cir\xFArgica Descart\xE1vel, Est\xE9ril, tam. 7,0.",
      "unit": "par",
      "initial": 8,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-131",
      "row": 131,
      "number": 124,
      "name": "Luva Cir\xFArgica Descart\xE1vel, Est\xE9ril, tam. 7,5.",
      "unit": "par",
      "initial": 42,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-132",
      "row": 132,
      "number": 125,
      "name": "Luva Cir\xFArgica Descart\xE1vel, Est\xE9ril, tam. 8,0.",
      "unit": "par",
      "initial": 26,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-133",
      "row": 133,
      "number": 126,
      "name": "Luva Cir\xFArgica Descart\xE1vel, Est\xE9ril, tam. 8,5.",
      "unit": "par",
      "initial": 15,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-134",
      "row": 134,
      "number": 127,
      "name": "Luva Nitr\xEDlica sem p\xF3 - tamanho Pequeno",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-135",
      "row": 135,
      "number": 128,
      "name": "Luva Nitr\xEDlica sem p\xF3 - tamanho M\xE9dio",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-136",
      "row": 136,
      "number": 129,
      "name": "Luva Nitr\xEDlica sem p\xF3 - tamanho Grande",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-137",
      "row": 137,
      "number": 130,
      "name": "Luva de L\xE1tex p/ Procedimentos, tamanho Grande.",
      "unit": "unidade",
      "initial": 1800,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-138",
      "row": 138,
      "number": 131,
      "name": "Luva de L\xE1tex p/ Procedimentos, tamanho M\xE9dio.",
      "unit": "unidade",
      "initial": 500,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-139",
      "row": 139,
      "number": 132,
      "name": "Luva de L\xE1tex p/ Procedimentos, tamanho Pequeno.",
      "unit": "unidade",
      "initial": 1e3,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-140",
      "row": 140,
      "number": 133,
      "name": "Luva de Vinil p/ procedimento, tamanho Grande.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-141",
      "row": 141,
      "number": 134,
      "name": "Luva de Vinil p/ procedimento, tamanho M\xE9dia.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-142",
      "row": 142,
      "number": 135,
      "name": "Luva de Vinil p/ procedimento, tamanho Pequena.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-143",
      "row": 143,
      "number": 136,
      "name": "Manguito para aparelho de press\xE3o semi-autom\xE1tico, tamanho adulto.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-144",
      "row": 144,
      "number": 137,
      "name": "Manguito para aparelho de press\xE3o semi-autom\xE1tico, tamanho infantil.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-145",
      "row": 145,
      "number": 138,
      "name": "Manguito para aparelho de press\xE3o semi-autom\xE1tico, tamanho obeso.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-146",
      "row": 146,
      "number": 139,
      "name": "M\xE1scara cir\xFArgica com el\xE1stico de 3 camadas.",
      "unit": "unidade",
      "initial": 600,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-147",
      "row": 147,
      "number": 140,
      "name": 'M\xE1scara de Venturi, para oxigenioterapia com sistema de "Venturi", tamanho ADULTO.',
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-148",
      "row": 148,
      "number": 141,
      "name": 'M\xE1scara de Venturi, para oxigenioterapia com sistema de "Venturi", tamanho INFANTIL.',
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-149",
      "row": 149,
      "number": 142,
      "name": "M\xE1scara N95 (PPF-2).",
      "unit": "unidade",
      "initial": 16,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-150",
      "row": 150,
      "number": 143,
      "name": "Micronebulizador completo para inala\xE7\xE3o ADULTO, para ar comprimido.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-151",
      "row": 151,
      "number": 144,
      "name": "Micronebulizador completo para inala\xE7\xE3o ADULTO, para oxig\xEAnio.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-152",
      "row": 152,
      "number": 145,
      "name": "Micronebulizador completo para inala\xE7\xE3o INFANTIL, para ar comprimido.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-153",
      "row": 153,
      "number": 146,
      "name": "Micronebulizador completo para inala\xE7\xE3o INFANTIL, para oxig\xEAnio.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-154",
      "row": 154,
      "number": 147,
      "name": "\xD3culos de Policarbonato (Prote\xE7\xE3o).",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-155",
      "row": 155,
      "number": 148,
      "name": "Papel em grau cir\xFArgico, 05 cm x 100 cm, composto de filme.",
      "unit": "rolo",
      "initial": null,
      "note": "ODONTO",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-156",
      "row": 156,
      "number": 149,
      "name": "Papel em grau cir\xFArgico, 10 cm x 100 cm, composto de filme.",
      "unit": "rolo",
      "initial": null,
      "note": "ODONTO",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-157",
      "row": 157,
      "number": 150,
      "name": "Papel em grau cir\xFArgico, 15 cm x 100 cm, composto de filme.",
      "unit": "rolo",
      "initial": null,
      "note": "ODONTO",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-158",
      "row": 158,
      "number": 151,
      "name": "Papel em grau cir\xFArgico, 20 cm x 100 cm, composto de filme.",
      "unit": "rolo",
      "initial": null,
      "note": "ODONTO",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-159",
      "row": 159,
      "number": 152,
      "name": "Papel em grau cir\xFArgico, 30 cm x 100 cm, composto de filme.",
      "unit": "rolo",
      "initial": null,
      "note": "ODONTO",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-160",
      "row": 160,
      "number": 153,
      "name": "Papel para Eletrocardiograma, termo-sens\xEDvel, medindo  110 mm (de largura) x 20 m\xEDnimo de metros (de comprimento).",
      "unit": "rolo",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-161",
      "row": 161,
      "number": 154,
      "name": "Papel para Eletrocardiograma, termo-sens\xEDvel, medindo  80 mm (de largura) x 20 m\xEDnimo de metros (de comprimento).",
      "unit": "rolo",
      "initial": 10,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-162",
      "row": 162,
      "number": 155,
      "name": "Papel para Eletrocardiograma, em rolo de 210 mm (compativel ap. de ECG Maxedan e Contec).",
      "unit": "rolo",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-163",
      "row": 163,
      "number": 156,
      "name": "Papel para Eletrocardiograma, em folha A4 milimetrada (medindo aproximadamente 215 x 280 mm).",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-164",
      "row": 164,
      "number": 157,
      "name": "Pilha tipo AA (pequena).",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-165",
      "row": 165,
      "number": 158,
      "name": "Pilha tipo AAA (palito).",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-166",
      "row": 166,
      "number": 159,
      "name": "Pilha tipo Bateria (9V).",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-167",
      "row": 167,
      "number": 160,
      "name": "Pilha tipo C (m\xE9dia).",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-168",
      "row": 168,
      "number": 161,
      "name": "Preservativo Masculino em L\xE1tex, COM LUBRIFICANTE",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-169",
      "row": 169,
      "number": 162,
      "name": "Preservativo Masculino em L\xE1tex, SEM LUBRIFICANTE, PARA REALIZA\xC7\xC3O DE EXAMES",
      "unit": "unidade",
      "initial": null,
      "note": "-",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-170",
      "row": 170,
      "number": 163,
      "name": "Pulseira de identifica\xE7\xE3o para rec\xE9m nascido.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-171",
      "row": 171,
      "number": 164,
      "name": "Reanimador cardiorespirat\xF3rio manual (AMBU) Adulto.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-172",
      "row": 172,
      "number": 165,
      "name": "Reanimador cardiorespirat\xF3rio manual (AMBU) Infantil.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-173",
      "row": 173,
      "number": 166,
      "name": "Reanimador cardiorespirat\xF3rio manual (AMBU) Neonatal",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-174",
      "row": 174,
      "number": 167,
      "name": "Saco para cad\xE1ver.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-175",
      "row": 175,
      "number": 168,
      "name": "Seringa descart\xE1vel est\xE9ril, capacidade 01 mL, bico tipo luer lock, sem agulha.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-176",
      "row": 176,
      "number": 169,
      "name": "Seringa descart\xE1vel est\xE9ril, capacidade 03 mL, bico tipo luer lock, sem agulha.",
      "unit": "unidade",
      "initial": 1300,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-177",
      "row": 177,
      "number": 170,
      "name": "Seringa descart\xE1vel est\xE9ril, capacidade 05 mL, bico tipo luer lock, sem agulha.",
      "unit": "unidade",
      "initial": 700,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-178",
      "row": 178,
      "number": 171,
      "name": "Seringa descart\xE1vel est\xE9ril, capacidade 10 mL, bico tipo luer lock, sem agulha.",
      "unit": "unidade",
      "initial": 93,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-179",
      "row": 179,
      "number": 172,
      "name": "Seringa descart\xE1vel est\xE9ril, capacidade 20 mL, bico tipo slip e sem rosca, sem agulha.",
      "unit": "unidade",
      "initial": 1e3,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-180",
      "row": 180,
      "number": 173,
      "name": "Seringa descart\xE1vel est\xE9ril, capacidade 20 mL, bico luer lock, com rosca, sem agulha.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-181",
      "row": 181,
      "number": 174,
      "name": "Sonda de Aspira\xE7\xE3o traqueal n\xB0 06.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-182",
      "row": 182,
      "number": 175,
      "name": "Sonda de Aspira\xE7\xE3o traqueal n\xB0 08.",
      "unit": "unidade",
      "initial": 50,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-183",
      "row": 183,
      "number": 176,
      "name": "Sonda de Aspira\xE7\xE3o traqueal n\xB0 10.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-184",
      "row": 184,
      "number": 177,
      "name": "Sonda de Aspira\xE7\xE3o traqueal n\xB0 12.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-185",
      "row": 185,
      "number": 178,
      "name": "Sonda de Aspira\xE7\xE3o traqueal n\xB0 14.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-186",
      "row": 186,
      "number": 179,
      "name": "Sonda Endotraqueal  n\xB0 2,5 - Sem bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-187",
      "row": 187,
      "number": 180,
      "name": "Sonda Endotraqueal  n\xB0 3,0 - Sem bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-188",
      "row": 188,
      "number": 181,
      "name": "Sonda Endotraqueal  n\xB0 3,5 - Sem bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-189",
      "row": 189,
      "number": 182,
      "name": "Sonda Endotraqueal n\xB0 4,0 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-190",
      "row": 190,
      "number": 183,
      "name": "Sonda Endotraqueal n\xB0 4,5 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-191",
      "row": 191,
      "number": 184,
      "name": "Sonda Endotraqueal n\xB0 5,0 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-192",
      "row": 192,
      "number": 185,
      "name": "Sonda Endotraqueal n\xB0 5,5 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-193",
      "row": 193,
      "number": 186,
      "name": "Sonda Endotraqueal n\xB0 6,0 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-194",
      "row": 194,
      "number": 187,
      "name": "Sonda Endotraqueal n\xB0 6,5 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-195",
      "row": 195,
      "number": 188,
      "name": "Sonda Endotraqueal n\xB0 7,0 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-196",
      "row": 196,
      "number": 189,
      "name": "Sonda Endotraqueal n\xB0 7,5 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-197",
      "row": 197,
      "number": 190,
      "name": "Sonda Endotraqueal n\xB0 8,0 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-198",
      "row": 198,
      "number": 191,
      "name": "Sonda Endotraqueal n\xB0 8,5 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-199",
      "row": 199,
      "number": 192,
      "name": "Sonda Endotraqueal n\xB0 9,0 - Com bal\xE3o.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-200",
      "row": 200,
      "number": 193,
      "name": "Sonda Foley  n\xB0 08, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-201",
      "row": 201,
      "number": 194,
      "name": "Sonda Foley  n\xB0 08, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-202",
      "row": 202,
      "number": 195,
      "name": "Sonda Foley  n\xB0 10, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-203",
      "row": 203,
      "number": 196,
      "name": "Sonda Foley  n\xB0 10, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-204",
      "row": 204,
      "number": 197,
      "name": "Sonda Foley  n\xB0 12, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-205",
      "row": 205,
      "number": 198,
      "name": "Sonda Foley  n\xB0 12, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-206",
      "row": 206,
      "number": 199,
      "name": "Sonda Foley  n\xB0 14, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 14,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-207",
      "row": 207,
      "number": 200,
      "name": "Sonda Foley  n\xB0 14, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 17,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-208",
      "row": 208,
      "number": 201,
      "name": "Sonda Foley  n\xB0 16, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 9,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-209",
      "row": 209,
      "number": 202,
      "name": "Sonda Foley  n\xB0 16, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-210",
      "row": 210,
      "number": 203,
      "name": "Sonda Foley  n\xB0 18, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 18,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-211",
      "row": 211,
      "number": 204,
      "name": "Sonda Foley  n\xB0 18, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-212",
      "row": 212,
      "number": 205,
      "name": "Sonda Foley  n\xB0 20, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 10,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-213",
      "row": 213,
      "number": 206,
      "name": "Sonda Foley  n\xB0 20, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-214",
      "row": 214,
      "number": 207,
      "name": "Sonda Foley  n\xB0 22, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-215",
      "row": 215,
      "number": 208,
      "name": "Sonda Foley  n\xB0 22, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-216",
      "row": 216,
      "number": 209,
      "name": "Sonda Foley  n\xB0 24, confeccionada em borracha natural, siliconizada, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-217",
      "row": 217,
      "number": 210,
      "name": "Sonda Foley  n\xB0 24, confeccionada em silicone, est\xE9ril, com duas vias.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-218",
      "row": 218,
      "number": 211,
      "name": "Sonda Nasog\xE1strica Longa n\xB0 06.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-219",
      "row": 219,
      "number": 212,
      "name": "Sonda Nasog\xE1strica Longa n\xB0 08.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-220",
      "row": 220,
      "number": 213,
      "name": "Sonda Nasog\xE1strica Longa n\xB0 10.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-221",
      "row": 221,
      "number": 214,
      "name": "Sonda Nasog\xE1strica Longa n\xB0 12.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-222",
      "row": 222,
      "number": 215,
      "name": "Sonda Nasog\xE1strica Longa n\xB0 14.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-223",
      "row": 223,
      "number": 216,
      "name": "Sonda Nasog\xE1strica Longa n\xB0 16.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-224",
      "row": 224,
      "number": 217,
      "name": "Sonda Nasog\xE1strica Longa n\xB0 18.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-225",
      "row": 225,
      "number": 218,
      "name": "Sonda Nasog\xE1strica Longa n\xB0 20.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-226",
      "row": 226,
      "number": 219,
      "name": "Sonda para alimenta\xE7\xE3o enteral n\xB0 06.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-227",
      "row": 227,
      "number": 220,
      "name": "Sonda para alimenta\xE7\xE3o enteral n\xB0 08.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-228",
      "row": 228,
      "number": 221,
      "name": "Sonda para alimenta\xE7\xE3o enteral n\xB0 12.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-229",
      "row": 229,
      "number": 222,
      "name": "Sonda Uretral n\xB0 06.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-230",
      "row": 230,
      "number": 223,
      "name": "Sonda Uretral n\xB0 08.",
      "unit": "unidade",
      "initial": 400,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-231",
      "row": 231,
      "number": 224,
      "name": "Sonda Uretral n\xB0 10.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-232",
      "row": 232,
      "number": 225,
      "name": "Sonda Uretral n\xB0 12.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-233",
      "row": 233,
      "number": 226,
      "name": "Sonda Uretral n\xB0 14.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-234",
      "row": 234,
      "number": 227,
      "name": "Termohigr\xF4metro - temperatura e umidade",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-235",
      "row": 235,
      "number": 228,
      "name": "Term\xF4metro digital com cabo extensor - temperatura m\xE1xima e m\xEDnima",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-236",
      "row": 236,
      "number": 229,
      "name": "Term\xF4metro eletr\xF4nico para verifica\xE7\xE3o da temperatura corporal humana.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-237",
      "row": 237,
      "number": 230,
      "name": "Tiras para teste de gravidez (bHCG - soro/urina) ultr\xE1-r\xE1pido.",
      "unit": "unidade",
      "initial": 100,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-238",
      "row": 238,
      "number": 231,
      "name": "Tiras reagentes de urian\xE1lises (Urina) com v\xE1rias \xE1reas reagentes.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-239",
      "row": 239,
      "number": 232,
      "name": "Torneirinha de 3 vias, descart\xE1vel, est\xE9ril.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-240",
      "row": 240,
      "number": 233,
      "name": "Touca (Gorro)  cirurgica descart\xE1vel.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-241",
      "row": 241,
      "number": 234,
      "name": "Tubo de L\xE1tex Natural (Garrote), resistente, ref. 200.",
      "unit": "metro",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-242",
      "row": 242,
      "number": 235,
      "name": "Tubo Hospitalar de Silicone ref. 204.",
      "unit": "metro",
      "initial": 0,
      "note": "",
      "group": "Enfermagem",
      "category": "materials"
    },
    {
      "id": "alm-248",
      "row": 248,
      "number": 1,
      "name": "Agulha para Caneta de Insulina 4MM",
      "unit": "unidade",
      "initial": 5e3,
      "note": "",
      "group": "Insulino-dependentes",
      "category": "materials"
    },
    {
      "id": "alm-249",
      "row": 249,
      "number": 2,
      "name": "Tiras reagentes para determina\xE7\xE3o de glicemia.",
      "unit": "unidade",
      "initial": 5e3,
      "note": "",
      "group": "Insulino-dependentes",
      "category": "materials"
    },
    {
      "id": "alm-250",
      "row": 250,
      "number": 3,
      "name": "Lanceta (c/ dispositivo de seguran\xE7a) descart\xE1veis para pun\xE7\xE3o digital.",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Insulino-dependentes",
      "category": "materials"
    },
    {
      "id": "alm-251",
      "row": 251,
      "number": 4,
      "name": "Lancetas (p/ lancetador) descart\xE1veis para pun\xE7\xE3o digital.",
      "unit": "unidade",
      "initial": 1e3,
      "note": "",
      "group": "Insulino-dependentes",
      "category": "materials"
    },
    {
      "id": "alm-252",
      "row": 252,
      "number": 5,
      "name": "Seringa descart\xE1vel para insulina - 0,5 ml (50 UI), com agulha.",
      "unit": "unidade",
      "initial": 300,
      "note": "",
      "group": "Insulino-dependentes",
      "category": "materials"
    },
    {
      "id": "alm-253",
      "row": 253,
      "number": 6,
      "name": "Seringa descart\xE1vel para insulina - 1,0 ml (100 UI), com agulha.",
      "unit": "unidade",
      "initial": 1e3,
      "note": "",
      "group": "Insulino-dependentes",
      "category": "materials"
    },
    {
      "id": "alm-259",
      "row": 259,
      "number": 1,
      "name": "Bandagem de compress\xE3o el\xE1stica",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-260",
      "row": 260,
      "number": 2,
      "name": "Bota de Unna com \xF3xido de Zinco",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-261",
      "row": 261,
      "number": 3,
      "name": "Creme Barreira",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-262",
      "row": 262,
      "number": 4,
      "name": "Curativo antimicrobiano para transfer\xEAncia de exsudato",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-263",
      "row": 263,
      "number": 5,
      "name": "Curativo com 1,2% de prata i\xF4nica",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-264",
      "row": 264,
      "number": 6,
      "name": "Curativo de fibras gelificantes com sulfato de prata",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-265",
      "row": 265,
      "number": 7,
      "name": "Curativo de hidrofibra com alginato",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-266",
      "row": 266,
      "number": 8,
      "name": "Espuma com prata, sem adesivo",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-267",
      "row": 267,
      "number": 9,
      "name": "Espuma sem prata, sem adesivo",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-268",
      "row": 268,
      "number": 10,
      "name": "HIDROCOL\xD3IDE em placa",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-269",
      "row": 269,
      "number": 11,
      "name": "HIDROGEL amorfo",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-270",
      "row": 270,
      "number": 12,
      "name": "LO\xC7\xC3O OLEOSA DERMO PROTETORA",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    },
    {
      "id": "alm-271",
      "row": 271,
      "number": 13,
      "name": "Solu\xE7\xE3o composta de \xE1gua purificada, phmb 0,1% e derivado beta\xEDnico 0,1%",
      "unit": "unidade",
      "initial": 0,
      "note": "",
      "group": "Curativos especiais",
      "category": "materials"
    }
  ];

  // src/domain.js
  var ROLES = { doctor: "M\xE9dico(a)", nurse: "Enfermeiro(a)", technician: "T\xE9c. de Enfermagem", assistant: "Aux. de Enfermagem", dentist: "Dentista", psychologist: "Psic\xF3logo(a)", manager: "Ger\xEAncia", productivity: "Produtividade", reception: "Recep\xE7\xE3o" };
  var STAFF = [
    ["alda", "Alda de Oliveira", "M\xE9dica IV", "doctor"],
    ["bianca", "Bianca", "Dentista II", "dentist"],
    ["hans", "Hans Loures Bauer", "M\xE9dico II", "doctor"],
    ["heitor", "Heitor Pereira Borges Bonolo", "M\xE9dico III", "doctor"],
    ["laura", "Laura", "Dentista", "dentist"],
    ["leticia", "Let\xEDcia Novo Arnas", "M\xE9dica I", "doctor"],
    ["michelli", "Michelli", "Psic\xF3loga", "psychologist"],
    ["natalia", "Nat\xE1lia Cec\xEDlio Assun\xE7\xE3o", "M\xE9dica Apoios", "doctor"],
    ["tania", "T\xE2nia", "Produtividade", "productivity"],
    ["debora", "D\xE9bora", "Ger\xEAncia", "manager"],
    ["heuller", "Heuller Diego Lara Andrade", "Ger\xEAncia / Enfermagem IV", "manager", "nurse"],
    ["ingrid", "Ingrid Gabriele", "Enfermagem III", "nurse"],
    ["gino", "Gino Prehl", "Enfermagem II", "nurse"],
    ["maria-lucia", "Maria L\xFAcia", "Enfermagem I", "nurse"],
    ["thais", "Tha\xEDs Bassani", "Enfermagem IV", "nurse"],
    ["paulo", "Paulo Donizete", "Aux. de Enfermagem I", "assistant"],
    ["jose", "Jos\xE9 Nicelso", "Enfermagem III - Apoio", "nurse"],
    ["dircelene", "Dircelene Martins", "Aux. de Enfermagem II", "assistant"],
    ["samanta", "Samanta Vanessa", "T\xE9c. de Enfermagem IV", "technician"],
    ["aguida", "\xC1guida Vit\xF3ria", "T\xE9c. de Enfermagem III", "technician"],
    ["idevanete", "Idevanete Tavares", "Aux. de Enfermagem IV", "assistant"]
  ].map(([id, name, title, role, clinicalRole]) => ({ id, name, title, role, ...clinicalRole ? { clinicalRole } : {} }));
  var BLOCKS = [
    ["simples", "Receitu\xE1rio Simples", 3],
    ["especial", "Receitu\xE1rio de Controle Especial", 3],
    ["b", "Receitu\xE1rio B (Azul)", 1],
    ["a", "Receitu\xE1rio A (Amarela)", 1],
    ["sadt", "SADT", 3],
    ["laboratorio", "SADT Laborat\xF3rio", 3],
    ["atendimento", "Ficha de Atendimento", 3],
    ["atestado", "Atestado", 3]
  ].map(([id, name, minimum]) => ({ id, name, minimum }));
  var nursing = (u) => ["nurse", "technician", "assistant"].includes((u == null ? void 0 : u.clinicalRole) || (u == null ? void 0 : u.role));
  var clinical = (u) => nursing(u) || ["doctor", "dentist", "psychologist"].includes(u == null ? void 0 : u.role);
  var canSeeMaterials = (u) => nursing(u) || (u == null ? void 0 : u.role) === "manager";
  var orderManager = (u) => ["heuller", "debora", "ingrid", "maria-lucia"].includes(u == null ? void 0 : u.id);
  function localDate(t = Date.now()) {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(t));
  }
  function scheduledAt(p) {
    return Date.parse(`${p.date}T${p.time}:00-03:00`);
  }
  function isLate(p, now = Date.now()) {
    return now >= scheduledAt(p) + 15 * 6e4;
  }
  function bmi(weight, height) {
    return Number(weight) > 0 && Number(height) > 0 ? Math.round(Number(weight) / (Number(height) / 100) ** 2 * 100) / 100 : null;
  }
  function requireThat(condition, message) {
    if (!condition) throw new Error(message);
  }
  function paperNumberValue(value) {
    if (typeof value !== "number" && typeof value !== "string") return null;
    if (!/^\d{1,2}$/.test(String(value).trim())) return null;
    const number = Number(value);
    return Number.isInteger(number) && number >= 1 && number <= 30 ? number : null;
  }
  function validateBatchNumbers(patients2, existing = []) {
    const key = (row, number) => [row.professionalId, row.date, number].join("|");
    const used = /* @__PURE__ */ new Set();
    for (const row of existing) {
      const number = paperNumberValue(row.paperNumber);
      if (number !== null) used.add(key(row, number));
    }
    for (const [index, row] of patients2.entries()) {
      const number = paperNumberValue(row.paperNumber);
      let message = "";
      if (number === null) message = "Escolha um n\xFAmero do papel entre 1 e 30.";
      else if (used.has(key(row, number))) message = "O n\xBA " + number + " j\xE1 consta na lista deste profissional nesta data.";
      if (message) {
        const error = new Error("Linha " + (index + 1) + ": " + message);
        error.rowIndex = index;
        throw error;
      }
      used.add(key(row, number));
    }
  }
  function patientInput(p) {
    const out = { paperNumber: paperNumberValue(p.paperNumber), name: String(p.name || "").trim(), date: String(p.date || ""), time: String(p.time || ""), professionalId: String(p.professionalId || ""), birth: String(p.birth || ""), record: String(p.record || "").trim(), location: String(p.location || "").trim() };
    requireThat(out.paperNumber !== null, "Escolha um n\xFAmero do papel entre 1 e 30.");
    requireThat(out.name.length >= 2 && out.name.length <= 160, "Informe o nome completo (at\xE9 160 caracteres).");
    requireThat(/^\d{4}-\d{2}-\d{2}$/.test(out.date) && !isNaN(Date.parse(out.date)) && new Date(out.date).toISOString().slice(0, 10) === out.date, "Data inv\xE1lida.");
    requireThat(/^([01]\d|2[0-3]):[0-5]\d$/.test(out.time), "Hor\xE1rio inv\xE1lido.");
    requireThat(out.professionalId && out.record.length <= 60 && out.location.length <= 100, "Confira o profissional e os dados do prontu\xE1rio.");
    requireThat(!out.birth || /^\d{4}-\d{2}-\d{2}$/.test(out.birth) && !isNaN(Date.parse(out.birth)) && new Date(out.birth).toISOString().slice(0, 10) === out.birth && out.birth <= out.date, "Nascimento inv\xE1lido.");
    return out;
  }
  function transition(p, action, now) {
    const iso2 = new Date(now).toISOString();
    if (action === "arrive") {
      requireThat(!p.startedAt && !p.endedAt, "O atendimento j\xE1 foi iniciado.");
      p.arrivedAt = iso2;
      p.markedAt = iso2;
      p.status = isLate(p, now) ? "late" : "arrived";
      p.lateDecision = null;
    } else if (action === "absent") {
      requireThat(!p.startedAt && !p.endedAt, "O atendimento j\xE1 foi iniciado.");
      p.arrivedAt = null;
      p.markedAt = iso2;
      p.status = "absent";
      p.lateDecision = null;
    } else if (action === "undo") {
      requireThat(!p.startedAt && !p.endedAt, "O atendimento j\xE1 foi iniciado.");
      p.arrivedAt = null;
      p.markedAt = iso2;
      p.status = isLate(p, now) ? "late_absent" : "scheduled";
      p.lateDecision = null;
    } else if (action === "ask") {
      requireThat(p.status === "late", "Registre primeiro a chegada atrasada.");
      p.status = "pending";
      p.requestedAt = iso2;
    } else if (action === "accept" || action === "reject") {
      requireThat(p.status === "pending", "Este pedido j\xE1 foi respondido ou cancelado.");
      p.lateDecision = action;
      p.decidedAt = iso2;
      p.status = action === "accept" ? "arrived" : "late_absent";
    } else if (action === "start") {
      requireThat(p.status === "arrived" && !p.startedAt && !p.endedAt, "O paciente precisa estar presente e liberado.");
      p.startedAt = iso2;
    } else if (action === "finish" || action === "later") {
      requireThat(p.startedAt && !p.endedAt, "Inicie o atendimento antes de finalizar.");
      p.endedAt = iso2;
      p.completion = action === "finish" ? "complete" : "pending";
    } else throw new Error("A\xE7\xE3o inv\xE1lida.");
    return p;
  }
  function hasProductivity(p) {
    return Object.values(p.productivity || {}).some((v) => Array.isArray(v) ? v.length > 0 : v != null && String(v).trim() !== "");
  }
  function recordProductivity(patient, raw, at) {
    const productivity = validProductivity(raw);
    patient.productivity = productivity;
    if (!hasProductivity(patient)) return;
    patient.status = "arrived";
    if (!patient.endedAt) patient.endedAt = new Date(at).toISOString();
    patient.completion = "complete";
  }
  function validProductivity(raw = {}) {
    const out = {};
    for (const [key, max] of Object.entries({ weight: 700, height: 300, pc: 100, gestWeeks: 45, gestDays: 6, previousPregnancies: 60, previousBirths: 40 })) {
      if (raw[key] !== "" && raw[key] != null) {
        const n = Number(raw[key]);
        requireThat(Number.isFinite(n) && n >= 0 && n <= max, `Valor inv\xE1lido: ${key}`);
        requireThat(!["gestWeeks", "gestDays", "previousPregnancies", "previousBirths"].includes(key) || Number.isInteger(n), "Use n\xFAmeros inteiros para semanas, dias e partos.");
        out[key] = n;
      }
    }
    for (const [key, values] of Object.entries({ vaccination: ["", "Em dia", "Em atraso", "N\xE3o informado"], breastfeeding: ["", "Exclusiva", "Mista", "N\xE3o"], planned: ["", "Sim", "N\xE3o", "N\xE3o informado"] })) {
      requireThat(values.includes(raw[key] || ""), "Op\xE7\xE3o cl\xEDnica inv\xE1lida.");
      out[key] = raw[key] || "";
    }
    for (const key of ["heelTest", "redReflex", "hearingTest"]) {
      if (raw[key] === true || raw[key] === "on") out[key] = true;
    }
    if (raw.dum) {
      const date = String(raw.dum);
      requireThat(/^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(Date.parse(date)) && new Date(date).toISOString().slice(0, 10) === date, "Informe uma DUM v\xE1lida.");
      out.dum = date;
    }
    if (raw.rp) out.rp = String(raw.rp).trim().slice(0, 80);
    out.pressure = String(raw.pressure || "").slice(0, 40);
    out.notes = String(raw.notes || "").slice(0, 6e3);
    out.bmi = bmi(out.weight, out.height);
    for (const key of ["cid", "ciap", "sigtap"]) {
      requireThat(Array.isArray(raw[key] || []) && (raw[key] || []).length <= 200, "Quantidade de c\xF3digos excedida (200 por quadro).");
      out[key] = (raw[key] || []).map((x) => ({ code: String(x.code || "").slice(0, 15), label: String(x.label || "").slice(0, 250), ...key === "ciap" && Array.isArray(x.sources) ? { sources: x.sources.filter((v) => typeof v === "string" && v.length <= 15).slice(0, 200), manual: !!x.manual } : {} }));
    }
    if (diabetesFields(out)) {
      if (raw.hba1c !== "" && raw.hba1c != null) {
        const value = Number(raw.hba1c);
        requireThat(Number.isFinite(value) && value > 0 && value <= 100, "Informe a glicada como porcentagem entre 0 e 100, maior que zero.");
        out.hba1c = value;
      }
      if (raw.hbaRequested === true || raw.hbaRequested === "on") out.hbaRequested = true;
      if (raw.footExam === true || raw.footExam === "on") out.footExam = true;
    }
    if (Array.isArray(raw.shortcuts)) out.shortcuts = shortcuts.filter((label) => raw.shortcuts.includes(label));
    return out;
  }
  function sortStaff(list) {
    return [...list].sort((a, b) => (["debora", "heuller"].includes(a.id) ? 1 : 0) - (["debora", "heuller"].includes(b.id) ? 1 : 0) || a.name.localeCompare(b.name, "pt-BR"));
  }

  // node_modules/@noble/hashes/esm/crypto.js
  var crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

  // node_modules/@noble/hashes/esm/utils.js
  function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
  }
  function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0)
      throw new Error("positive integer expected, got " + n);
  }
  function abytes(b, ...lengths) {
    if (!isBytes(b))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b.length))
      throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
  }
  function ahash(h) {
    if (typeof h !== "function" || typeof h.create !== "function")
      throw new Error("Hash should be wrapped by utils.createHasher");
    anumber(h.outputLen);
    anumber(h.blockLen);
  }
  function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error("digestInto() expects output buffer of length at least " + min);
    }
  }
  function clean2(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].fill(0);
    }
  }
  function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
  }
  var hasHexBuiltin = /* @__PURE__ */ (() => (
    // @ts-ignore
    typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
  ))();
  var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex(bytes) {
    abytes(bytes);
    if (hasHexBuiltin)
      return bytes.toHex();
    let hex = "";
    for (let i = 0; i < bytes.length; i++) {
      hex += hexes[bytes[i]];
    }
    return hex;
  }
  var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
      return ch - asciis._0;
    if (ch >= asciis.A && ch <= asciis.F)
      return ch - (asciis.A - 10);
    if (ch >= asciis.a && ch <= asciis.f)
      return ch - (asciis.a - 10);
    return;
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    if (hasHexBuiltin)
      return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase16(hex.charCodeAt(hi));
      const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex[hi] + hex[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    abytes(data);
    return data;
  }
  function kdfInputToBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    abytes(data);
    return data;
  }
  function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
      const a = arrays[i];
      abytes(a);
      sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const a = arrays[i];
      res.set(a, pad);
      pad += a.length;
    }
    return res;
  }
  function checkOpts(defaults, opts) {
    if (opts !== void 0 && {}.toString.call(opts) !== "[object Object]")
      throw new Error("options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
  }
  var Hash = class {
  };
  function createHasher(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function randomBytes(bytesLength = 32) {
    if (crypto && typeof crypto.getRandomValues === "function") {
      return crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    if (crypto && typeof crypto.randomBytes === "function") {
      return Uint8Array.from(crypto.randomBytes(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }

  // node_modules/@noble/curves/esm/utils.js
  var _0n = /* @__PURE__ */ BigInt(0);
  var _1n = /* @__PURE__ */ BigInt(1);
  function _abool2(value, title = "") {
    if (typeof value !== "boolean") {
      const prefix = title && `"${title}"`;
      throw new Error(prefix + "expected boolean, got type=" + typeof value);
    }
    return value;
  }
  function _abytes2(value, length, title = "") {
    const bytes = isBytes(value);
    const len = value == null ? void 0 : value.length;
    const needsLen = length !== void 0;
    if (!bytes || needsLen && len !== length) {
      const prefix = title && `"${title}" `;
      const ofLen = needsLen ? ` of length ${length}` : "";
      const got = bytes ? `length=${len}` : `type=${typeof value}`;
      throw new Error(prefix + "expected Uint8Array" + ofLen + ", got " + got);
    }
    return value;
  }
  function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? "0" + hex : hex;
  }
  function hexToNumber(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    return hex === "" ? _0n : BigInt("0x" + hex);
  }
  function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
  }
  function bytesToNumberLE(bytes) {
    abytes(bytes);
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
  }
  function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, "0"));
  }
  function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
  }
  function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === "string") {
      try {
        res = hexToBytes(hex);
      } catch (e) {
        throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
      }
    } else if (isBytes(hex)) {
      res = Uint8Array.from(hex);
    } else {
      throw new Error(title + " must be hex string or Uint8Array");
    }
    const len = res.length;
    if (typeof expectedLength === "number" && len !== expectedLength)
      throw new Error(title + " of length " + expectedLength + " expected, got " + len);
    return res;
  }
  var isPosBig = (n) => typeof n === "bigint" && _0n <= n;
  function inRange(n, min, max) {
    return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
  }
  function aInRange(title, n, min, max) {
    if (!inRange(n, min, max))
      throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
  }
  function bitLen(n) {
    let len;
    for (len = 0; n > _0n; n >>= _1n, len += 1)
      ;
    return len;
  }
  var bitMask = (n) => (_1n << BigInt(n)) - _1n;
  function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function")
      throw new Error("hmacFn must be a function");
    const u8n = (len) => new Uint8Array(len);
    const u8of = (byte) => Uint8Array.of(byte);
    let v = u8n(hashLen);
    let k = u8n(hashLen);
    let i = 0;
    const reset = () => {
      v.fill(1);
      k.fill(0);
      i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b);
    const reseed = (seed = u8n(0)) => {
      k = h(u8of(0), seed);
      v = h();
      if (seed.length === 0)
        return;
      k = h(u8of(1), seed);
      v = h();
    };
    const gen = () => {
      if (i++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let len = 0;
      const out = [];
      while (len < qByteLen) {
        v = h();
        const sl = v.slice();
        out.push(sl);
        len += v.length;
      }
      return concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while (!(res = pred(gen())))
        reseed();
      reset();
      return res;
    };
    return genUntil;
  }
  function _validateObject(object, fields, optFields = {}) {
    if (!object || typeof object !== "object")
      throw new Error("expected valid options object");
    function checkField(fieldName, expectedType, isOpt) {
      const val = object[fieldName];
      if (isOpt && val === void 0)
        return;
      const current = typeof val;
      if (current !== expectedType || val === null)
        throw new Error(`param "${fieldName}" is invalid: expected ${expectedType}, got ${current}`);
    }
    Object.entries(fields).forEach(([k, v]) => checkField(k, v, false));
    Object.entries(optFields).forEach(([k, v]) => checkField(k, v, true));
  }
  function memoized(fn) {
    const map = /* @__PURE__ */ new WeakMap();
    return (arg, ...args) => {
      const val = map.get(arg);
      if (val !== void 0)
        return val;
      const computed = fn(arg, ...args);
      map.set(arg, computed);
      return computed;
    };
  }

  // node_modules/@noble/curves/esm/abstract/modular.js
  var _0n2 = BigInt(0);
  var _1n2 = BigInt(1);
  var _2n = /* @__PURE__ */ BigInt(2);
  var _3n = /* @__PURE__ */ BigInt(3);
  var _4n = /* @__PURE__ */ BigInt(4);
  var _5n = /* @__PURE__ */ BigInt(5);
  var _7n = /* @__PURE__ */ BigInt(7);
  var _8n = /* @__PURE__ */ BigInt(8);
  var _9n = /* @__PURE__ */ BigInt(9);
  var _16n = /* @__PURE__ */ BigInt(16);
  function mod(a, b) {
    const result = a % b;
    return result >= _0n2 ? result : b + result;
  }
  function invert(number, modulo) {
    if (number === _0n2)
      throw new Error("invert: expected non-zero number");
    if (modulo <= _0n2)
      throw new Error("invert: expected positive modulus, got " + modulo);
    let a = mod(number, modulo);
    let b = modulo;
    let x = _0n2, y = _1n2, u = _1n2, v = _0n2;
    while (a !== _0n2) {
      const q = b / a;
      const r = b % a;
      const m = x - u * q;
      const n = y - v * q;
      b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n2)
      throw new Error("invert: does not exist");
    return mod(x, modulo);
  }
  function assertIsSquare(Fp, root, n) {
    if (!Fp.eql(Fp.sqr(root), n))
      throw new Error("Cannot find square root");
  }
  function sqrt3mod4(Fp, n) {
    const p1div4 = (Fp.ORDER + _1n2) / _4n;
    const root = Fp.pow(n, p1div4);
    assertIsSquare(Fp, root, n);
    return root;
  }
  function sqrt5mod8(Fp, n) {
    const p5div8 = (Fp.ORDER - _5n) / _8n;
    const n2 = Fp.mul(n, _2n);
    const v = Fp.pow(n2, p5div8);
    const nv = Fp.mul(n, v);
    const i = Fp.mul(Fp.mul(nv, _2n), v);
    const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
    assertIsSquare(Fp, root, n);
    return root;
  }
  function sqrt9mod16(P) {
    const Fp_ = Field(P);
    const tn = tonelliShanks(P);
    const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
    const c2 = tn(Fp_, c1);
    const c3 = tn(Fp_, Fp_.neg(c1));
    const c4 = (P + _7n) / _16n;
    return (Fp, n) => {
      let tv1 = Fp.pow(n, c4);
      let tv2 = Fp.mul(tv1, c1);
      const tv3 = Fp.mul(tv1, c2);
      const tv4 = Fp.mul(tv1, c3);
      const e1 = Fp.eql(Fp.sqr(tv2), n);
      const e2 = Fp.eql(Fp.sqr(tv3), n);
      tv1 = Fp.cmov(tv1, tv2, e1);
      tv2 = Fp.cmov(tv4, tv3, e2);
      const e3 = Fp.eql(Fp.sqr(tv2), n);
      const root = Fp.cmov(tv1, tv2, e3);
      assertIsSquare(Fp, root, n);
      return root;
    };
  }
  function tonelliShanks(P) {
    if (P < _3n)
      throw new Error("sqrt is not defined for small field");
    let Q = P - _1n2;
    let S = 0;
    while (Q % _2n === _0n2) {
      Q /= _2n;
      S++;
    }
    let Z = _2n;
    const _Fp = Field(P);
    while (FpLegendre(_Fp, Z) === 1) {
      if (Z++ > 1e3)
        throw new Error("Cannot find square root: probably non-prime P");
    }
    if (S === 1)
      return sqrt3mod4;
    let cc = _Fp.pow(Z, Q);
    const Q1div2 = (Q + _1n2) / _2n;
    return function tonelliSlow(Fp, n) {
      if (Fp.is0(n))
        return n;
      if (FpLegendre(Fp, n) !== 1)
        throw new Error("Cannot find square root");
      let M = S;
      let c = Fp.mul(Fp.ONE, cc);
      let t = Fp.pow(n, Q);
      let R = Fp.pow(n, Q1div2);
      while (!Fp.eql(t, Fp.ONE)) {
        if (Fp.is0(t))
          return Fp.ZERO;
        let i = 1;
        let t_tmp = Fp.sqr(t);
        while (!Fp.eql(t_tmp, Fp.ONE)) {
          i++;
          t_tmp = Fp.sqr(t_tmp);
          if (i === M)
            throw new Error("Cannot find square root");
        }
        const exponent = _1n2 << BigInt(M - i - 1);
        const b = Fp.pow(c, exponent);
        M = i;
        c = Fp.sqr(b);
        t = Fp.mul(t, c);
        R = Fp.mul(R, b);
      }
      return R;
    };
  }
  function FpSqrt(P) {
    if (P % _4n === _3n)
      return sqrt3mod4;
    if (P % _8n === _5n)
      return sqrt5mod8;
    if (P % _16n === _9n)
      return sqrt9mod16(P);
    return tonelliShanks(P);
  }
  var FIELD_FIELDS = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField(field) {
    const initial = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    _validateObject(field, opts);
    return field;
  }
  function FpPow(Fp, num, power) {
    if (power < _0n2)
      throw new Error("invalid exponent, negatives unsupported");
    if (power === _0n2)
      return Fp.ONE;
    if (power === _1n2)
      return num;
    let p = Fp.ONE;
    let d = num;
    while (power > _0n2) {
      if (power & _1n2)
        p = Fp.mul(p, d);
      d = Fp.sqr(d);
      power >>= _1n2;
    }
    return p;
  }
  function FpInvertBatch(Fp, nums, passZero = false) {
    const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
    const multipliedAcc = nums.reduce((acc, num, i) => {
      if (Fp.is0(num))
        return acc;
      inverted[i] = acc;
      return Fp.mul(acc, num);
    }, Fp.ONE);
    const invertedAcc = Fp.inv(multipliedAcc);
    nums.reduceRight((acc, num, i) => {
      if (Fp.is0(num))
        return acc;
      inverted[i] = Fp.mul(acc, inverted[i]);
      return Fp.mul(acc, num);
    }, invertedAcc);
    return inverted;
  }
  function FpLegendre(Fp, n) {
    const p1mod2 = (Fp.ORDER - _1n2) / _2n;
    const powered = Fp.pow(n, p1mod2);
    const yes = Fp.eql(powered, Fp.ONE);
    const zero = Fp.eql(powered, Fp.ZERO);
    const no = Fp.eql(powered, Fp.neg(Fp.ONE));
    if (!yes && !zero && !no)
      throw new Error("invalid Legendre symbol result");
    return yes ? 1 : zero ? 0 : -1;
  }
  function nLength(n, nBitLength) {
    if (nBitLength !== void 0)
      anumber(nBitLength);
    const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  function Field(ORDER, bitLenOrOpts, isLE2 = false, opts = {}) {
    if (ORDER <= _0n2)
      throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
    let _nbitLength = void 0;
    let _sqrt = void 0;
    let modFromBytes = false;
    let allowedLengths = void 0;
    if (typeof bitLenOrOpts === "object" && bitLenOrOpts != null) {
      if (opts.sqrt || isLE2)
        throw new Error("cannot specify opts in two arguments");
      const _opts = bitLenOrOpts;
      if (_opts.BITS)
        _nbitLength = _opts.BITS;
      if (_opts.sqrt)
        _sqrt = _opts.sqrt;
      if (typeof _opts.isLE === "boolean")
        isLE2 = _opts.isLE;
      if (typeof _opts.modFromBytes === "boolean")
        modFromBytes = _opts.modFromBytes;
      allowedLengths = _opts.allowedLengths;
    } else {
      if (typeof bitLenOrOpts === "number")
        _nbitLength = bitLenOrOpts;
      if (opts.sqrt)
        _sqrt = opts.sqrt;
    }
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, _nbitLength);
    if (BYTES > 2048)
      throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let sqrtP;
    const f = Object.freeze({
      ORDER,
      isLE: isLE2,
      BITS,
      BYTES,
      MASK: bitMask(BITS),
      ZERO: _0n2,
      ONE: _1n2,
      allowedLengths,
      create: (num) => mod(num, ORDER),
      isValid: (num) => {
        if (typeof num !== "bigint")
          throw new Error("invalid field element: expected bigint, got " + typeof num);
        return _0n2 <= num && num < ORDER;
      },
      is0: (num) => num === _0n2,
      // is valid and invertible
      isValidNot0: (num) => !f.is0(num) && f.isValid(num),
      isOdd: (num) => (num & _1n2) === _1n2,
      neg: (num) => mod(-num, ORDER),
      eql: (lhs, rhs) => lhs === rhs,
      sqr: (num) => mod(num * num, ORDER),
      add: (lhs, rhs) => mod(lhs + rhs, ORDER),
      sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
      mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
      pow: (num, power) => FpPow(f, num, power),
      div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
      // Same as above, but doesn't normalize
      sqrN: (num) => num * num,
      addN: (lhs, rhs) => lhs + rhs,
      subN: (lhs, rhs) => lhs - rhs,
      mulN: (lhs, rhs) => lhs * rhs,
      inv: (num) => invert(num, ORDER),
      sqrt: _sqrt || ((n) => {
        if (!sqrtP)
          sqrtP = FpSqrt(ORDER);
        return sqrtP(f, n);
      }),
      toBytes: (num) => isLE2 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
      fromBytes: (bytes, skipValidation = true) => {
        if (allowedLengths) {
          if (!allowedLengths.includes(bytes.length) || bytes.length > BYTES) {
            throw new Error("Field.fromBytes: expected " + allowedLengths + " bytes, got " + bytes.length);
          }
          const padded = new Uint8Array(BYTES);
          padded.set(bytes, isLE2 ? 0 : padded.length - bytes.length);
          bytes = padded;
        }
        if (bytes.length !== BYTES)
          throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
        let scalar = isLE2 ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
        if (modFromBytes)
          scalar = mod(scalar, ORDER);
        if (!skipValidation) {
          if (!f.isValid(scalar))
            throw new Error("invalid field element: outside of range 0..ORDER");
        }
        return scalar;
      },
      // TODO: we don't need it here, move out to separate fn
      invertBatch: (lst) => FpInvertBatch(f, lst),
      // We can't move this out because Fp6, Fp12 implement it
      // and it's unclear what to return in there.
      cmov: (a, b, c) => c ? b : a
    });
    return Object.freeze(f);
  }
  function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
  }
  function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
  }
  function mapHashToField(key, fieldOrder, isLE2 = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    if (len < 16 || len < minLen || len > 1024)
      throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
    const num = isLE2 ? bytesToNumberLE(key) : bytesToNumberBE(key);
    const reduced = mod(num, fieldOrder - _1n2) + _1n2;
    return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
  }

  // node_modules/@noble/hashes/esm/_md.js
  function setBigUint64(view, byteOffset, value, isLE2) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE2);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE2 ? 4 : 0;
    const l = isLE2 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE2);
    view.setUint32(byteOffset + l, wl, isLE2);
  }
  function Chi(a, b, c) {
    return a & b ^ ~a & c;
  }
  function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
  }
  var HashMD = class extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE2) {
      super();
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE2;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      aexists(this);
      data = toBytes(data);
      abytes(data);
      const { view, buffer, blockLen } = this;
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      aexists(this);
      aoutput(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE2 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      clean2(this.buffer.subarray(pos));
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i = pos; i < blockLen; i++)
        buffer[i] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
      this.process(view, 0);
      const oview = createView(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i = 0; i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE2);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor());
      to.set(...this.get());
      const { blockLen, buffer, length, finished, destroyed, pos } = this;
      to.destroyed = destroyed;
      to.finished = finished;
      to.length = length;
      to.pos = pos;
      if (length % blockLen)
        to.buffer.set(buffer);
      return to;
    }
    clone() {
      return this._cloneInto();
    }
  };
  var SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  var SHA384_IV = /* @__PURE__ */ Uint32Array.from([
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ]);
  var SHA512_IV = /* @__PURE__ */ Uint32Array.from([
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ]);

  // node_modules/@noble/hashes/esm/_u64.js
  var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  var _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n, le = false) {
    if (le)
      return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
    return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
  }
  function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for (let i = 0; i < len; i++) {
      const { h, l } = fromBig(lst[i], le);
      [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
  }
  var shrSH = (h, _l, s) => h >>> s;
  var shrSL = (h, l, s) => h << 32 - s | l >>> s;
  var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
  var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
  var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
  var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
  function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
  }
  var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;

  // node_modules/@noble/hashes/esm/sha2.js
  var SHA256_K = /* @__PURE__ */ Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  var SHA256 = class extends HashMD {
    constructor(outputLen = 32) {
      super(64, outputLen, 8, false);
      this.A = SHA256_IV[0] | 0;
      this.B = SHA256_IV[1] | 0;
      this.C = SHA256_IV[2] | 0;
      this.D = SHA256_IV[3] | 0;
      this.E = SHA256_IV[4] | 0;
      this.F = SHA256_IV[5] | 0;
      this.G = SHA256_IV[6] | 0;
      this.H = SHA256_IV[7] | 0;
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        SHA256_W[i] = view.getUint32(offset, false);
      for (let i = 16; i < 64; i++) {
        const W15 = SHA256_W[i - 15];
        const W2 = SHA256_W[i - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0; i < 64; i++) {
        const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
        const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
        const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
        const T2 = sigma0 + Maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T1 | 0;
        D = C;
        C = B;
        B = A;
        A = T1 + T2 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      clean2(SHA256_W);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      clean2(this.buffer);
    }
  };
  var K512 = /* @__PURE__ */ (() => split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((n) => BigInt(n))))();
  var SHA512_Kh = /* @__PURE__ */ (() => K512[0])();
  var SHA512_Kl = /* @__PURE__ */ (() => K512[1])();
  var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
  var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
  var SHA512 = class extends HashMD {
    constructor(outputLen = 64) {
      super(128, outputLen, 16, false);
      this.Ah = SHA512_IV[0] | 0;
      this.Al = SHA512_IV[1] | 0;
      this.Bh = SHA512_IV[2] | 0;
      this.Bl = SHA512_IV[3] | 0;
      this.Ch = SHA512_IV[4] | 0;
      this.Cl = SHA512_IV[5] | 0;
      this.Dh = SHA512_IV[6] | 0;
      this.Dl = SHA512_IV[7] | 0;
      this.Eh = SHA512_IV[8] | 0;
      this.El = SHA512_IV[9] | 0;
      this.Fh = SHA512_IV[10] | 0;
      this.Fl = SHA512_IV[11] | 0;
      this.Gh = SHA512_IV[12] | 0;
      this.Gl = SHA512_IV[13] | 0;
      this.Hh = SHA512_IV[14] | 0;
      this.Hl = SHA512_IV[15] | 0;
    }
    // prettier-ignore
    get() {
      const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
      this.Ah = Ah | 0;
      this.Al = Al | 0;
      this.Bh = Bh | 0;
      this.Bl = Bl | 0;
      this.Ch = Ch | 0;
      this.Cl = Cl | 0;
      this.Dh = Dh | 0;
      this.Dl = Dl | 0;
      this.Eh = Eh | 0;
      this.El = El | 0;
      this.Fh = Fh | 0;
      this.Fl = Fl | 0;
      this.Gh = Gh | 0;
      this.Gl = Gl | 0;
      this.Hh = Hh | 0;
      this.Hl = Hl | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4) {
        SHA512_W_H[i] = view.getUint32(offset);
        SHA512_W_L[i] = view.getUint32(offset += 4);
      }
      for (let i = 16; i < 80; i++) {
        const W15h = SHA512_W_H[i - 15] | 0;
        const W15l = SHA512_W_L[i - 15] | 0;
        const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
        const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
        const W2h = SHA512_W_H[i - 2] | 0;
        const W2l = SHA512_W_L[i - 2] | 0;
        const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
        const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
        const SUMl = add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
        const SUMh = add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
        SHA512_W_H[i] = SUMh | 0;
        SHA512_W_L[i] = SUMl | 0;
      }
      let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      for (let i = 0; i < 80; i++) {
        const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
        const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
        const CHIh = Eh & Fh ^ ~Eh & Gh;
        const CHIl = El & Fl ^ ~El & Gl;
        const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
        const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
        const T1l = T1ll | 0;
        const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
        const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
        const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
        const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
        Hh = Gh | 0;
        Hl = Gl | 0;
        Gh = Fh | 0;
        Gl = Fl | 0;
        Fh = Eh | 0;
        Fl = El | 0;
        ({ h: Eh, l: El } = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
        Dh = Ch | 0;
        Dl = Cl | 0;
        Ch = Bh | 0;
        Cl = Bl | 0;
        Bh = Ah | 0;
        Bl = Al | 0;
        const All = add3L(T1l, sigma0l, MAJl);
        Ah = add3H(All, T1h, sigma0h, MAJh);
        Al = All | 0;
      }
      ({ h: Ah, l: Al } = add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
      ({ h: Bh, l: Bl } = add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
      ({ h: Ch, l: Cl } = add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
      ({ h: Dh, l: Dl } = add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
      ({ h: Eh, l: El } = add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
      ({ h: Fh, l: Fl } = add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
      ({ h: Gh, l: Gl } = add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
      ({ h: Hh, l: Hl } = add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
      this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
      clean2(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
      clean2(this.buffer);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  var SHA384 = class extends SHA512 {
    constructor() {
      super(48);
      this.Ah = SHA384_IV[0] | 0;
      this.Al = SHA384_IV[1] | 0;
      this.Bh = SHA384_IV[2] | 0;
      this.Bl = SHA384_IV[3] | 0;
      this.Ch = SHA384_IV[4] | 0;
      this.Cl = SHA384_IV[5] | 0;
      this.Dh = SHA384_IV[6] | 0;
      this.Dl = SHA384_IV[7] | 0;
      this.Eh = SHA384_IV[8] | 0;
      this.El = SHA384_IV[9] | 0;
      this.Fh = SHA384_IV[10] | 0;
      this.Fl = SHA384_IV[11] | 0;
      this.Gh = SHA384_IV[12] | 0;
      this.Gl = SHA384_IV[13] | 0;
      this.Hh = SHA384_IV[14] | 0;
      this.Hl = SHA384_IV[15] | 0;
    }
  };
  var sha256 = /* @__PURE__ */ createHasher(() => new SHA256());
  var sha512 = /* @__PURE__ */ createHasher(() => new SHA512());
  var sha384 = /* @__PURE__ */ createHasher(() => new SHA384());

  // node_modules/@noble/hashes/esm/hmac.js
  var HMAC = class extends Hash {
    constructor(hash, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      ahash(hash);
      const key = toBytes(_key);
      this.iHash = hash.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash.create();
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54 ^ 92;
      this.oHash.update(pad);
      clean2(pad);
    }
    update(buf) {
      aexists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      aexists(this);
      abytes(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to || (to = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  };
  var hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
  hmac.create = (hash, key) => new HMAC(hash, key);

  // node_modules/@noble/curves/esm/abstract/curve.js
  var _0n3 = BigInt(0);
  var _1n3 = BigInt(1);
  function negateCt(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
  }
  function normalizeZ(c, points) {
    const invertedZs = FpInvertBatch(c.Fp, points.map((p) => p.Z));
    return points.map((p, i) => c.fromAffine(p.toAffine(invertedZs[i])));
  }
  function validateW(W, bits) {
    if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
      throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
  }
  function calcWOpts(W, scalarBits) {
    validateW(W, scalarBits);
    const windows = Math.ceil(scalarBits / W) + 1;
    const windowSize = 2 ** (W - 1);
    const maxNumber = 2 ** W;
    const mask = bitMask(W);
    const shiftBy = BigInt(W);
    return { windows, windowSize, mask, maxNumber, shiftBy };
  }
  function calcOffsets(n, window, wOpts) {
    const { windowSize, mask, maxNumber, shiftBy } = wOpts;
    let wbits = Number(n & mask);
    let nextN = n >> shiftBy;
    if (wbits > windowSize) {
      wbits -= maxNumber;
      nextN += _1n3;
    }
    const offsetStart = window * windowSize;
    const offset = offsetStart + Math.abs(wbits) - 1;
    const isZero = wbits === 0;
    const isNeg = wbits < 0;
    const isNegF = window % 2 !== 0;
    const offsetF = offsetStart;
    return { nextN, offset, isZero, isNeg, isNegF, offsetF };
  }
  function validateMSMPoints(points, c) {
    if (!Array.isArray(points))
      throw new Error("array expected");
    points.forEach((p, i) => {
      if (!(p instanceof c))
        throw new Error("invalid point at index " + i);
    });
  }
  function validateMSMScalars(scalars, field) {
    if (!Array.isArray(scalars))
      throw new Error("array of scalars expected");
    scalars.forEach((s, i) => {
      if (!field.isValid(s))
        throw new Error("invalid scalar at index " + i);
    });
  }
  var pointPrecomputes = /* @__PURE__ */ new WeakMap();
  var pointWindowSizes = /* @__PURE__ */ new WeakMap();
  function getW(P) {
    return pointWindowSizes.get(P) || 1;
  }
  function assert0(n) {
    if (n !== _0n3)
      throw new Error("invalid wNAF");
  }
  var wNAF = class {
    // Parametrized with a given Point class (not individual point)
    constructor(Point, bits) {
      this.BASE = Point.BASE;
      this.ZERO = Point.ZERO;
      this.Fn = Point.Fn;
      this.bits = bits;
    }
    // non-const time multiplication ladder
    _unsafeLadder(elm, n, p = this.ZERO) {
      let d = elm;
      while (n > _0n3) {
        if (n & _1n3)
          p = p.add(d);
        d = d.double();
        n >>= _1n3;
      }
      return p;
    }
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param point Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(point, W) {
      const { windows, windowSize } = calcWOpts(W, this.bits);
      const points = [];
      let p = point;
      let base = p;
      for (let window = 0; window < windows; window++) {
        base = p;
        points.push(base);
        for (let i = 1; i < windowSize; i++) {
          base = base.add(p);
          points.push(base);
        }
        p = base.double();
      }
      return points;
    }
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * More compact implementation:
     * https://github.com/paulmillr/noble-secp256k1/blob/47cb1669b6e506ad66b35fe7d76132ae97465da2/index.ts#L502-L541
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n) {
      if (!this.Fn.isValid(n))
        throw new Error("invalid scalar");
      let p = this.ZERO;
      let f = this.BASE;
      const wo = calcWOpts(W, this.bits);
      for (let window = 0; window < wo.windows; window++) {
        const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window, wo);
        n = nextN;
        if (isZero) {
          f = f.add(negateCt(isNegF, precomputes[offsetF]));
        } else {
          p = p.add(negateCt(isNeg, precomputes[offset]));
        }
      }
      assert0(n);
      return { p, f };
    }
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(W, precomputes, n, acc = this.ZERO) {
      const wo = calcWOpts(W, this.bits);
      for (let window = 0; window < wo.windows; window++) {
        if (n === _0n3)
          break;
        const { nextN, offset, isZero, isNeg } = calcOffsets(n, window, wo);
        n = nextN;
        if (isZero) {
          continue;
        } else {
          const item = precomputes[offset];
          acc = acc.add(isNeg ? item.negate() : item);
        }
      }
      assert0(n);
      return acc;
    }
    getPrecomputes(W, point, transform) {
      let comp = pointPrecomputes.get(point);
      if (!comp) {
        comp = this.precomputeWindow(point, W);
        if (W !== 1) {
          if (typeof transform === "function")
            comp = transform(comp);
          pointPrecomputes.set(point, comp);
        }
      }
      return comp;
    }
    cached(point, scalar, transform) {
      const W = getW(point);
      return this.wNAF(W, this.getPrecomputes(W, point, transform), scalar);
    }
    unsafe(point, scalar, transform, prev) {
      const W = getW(point);
      if (W === 1)
        return this._unsafeLadder(point, scalar, prev);
      return this.wNAFUnsafe(W, this.getPrecomputes(W, point, transform), scalar, prev);
    }
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    createCache(P, W) {
      validateW(W, this.bits);
      pointWindowSizes.set(P, W);
      pointPrecomputes.delete(P);
    }
    hasCache(elm) {
      return getW(elm) !== 1;
    }
  };
  function mulEndoUnsafe(Point, point, k1, k2) {
    let acc = point;
    let p1 = Point.ZERO;
    let p2 = Point.ZERO;
    while (k1 > _0n3 || k2 > _0n3) {
      if (k1 & _1n3)
        p1 = p1.add(acc);
      if (k2 & _1n3)
        p2 = p2.add(acc);
      acc = acc.double();
      k1 >>= _1n3;
      k2 >>= _1n3;
    }
    return { p1, p2 };
  }
  function pippenger(c, fieldN, points, scalars) {
    validateMSMPoints(points, c);
    validateMSMScalars(scalars, fieldN);
    const plength = points.length;
    const slength = scalars.length;
    if (plength !== slength)
      throw new Error("arrays of points and scalars must have equal length");
    const zero = c.ZERO;
    const wbits = bitLen(BigInt(plength));
    let windowSize = 1;
    if (wbits > 12)
      windowSize = wbits - 3;
    else if (wbits > 4)
      windowSize = wbits - 2;
    else if (wbits > 0)
      windowSize = 2;
    const MASK = bitMask(windowSize);
    const buckets = new Array(Number(MASK) + 1).fill(zero);
    const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
    let sum = zero;
    for (let i = lastBits; i >= 0; i -= windowSize) {
      buckets.fill(zero);
      for (let j = 0; j < slength; j++) {
        const scalar = scalars[j];
        const wbits2 = Number(scalar >> BigInt(i) & MASK);
        buckets[wbits2] = buckets[wbits2].add(points[j]);
      }
      let resI = zero;
      for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
        sumI = sumI.add(buckets[j]);
        resI = resI.add(sumI);
      }
      sum = sum.add(resI);
      if (i !== 0)
        for (let j = 0; j < windowSize; j++)
          sum = sum.double();
    }
    return sum;
  }
  function createField(order, field, isLE2) {
    if (field) {
      if (field.ORDER !== order)
        throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      validateField(field);
      return field;
    } else {
      return Field(order, { isLE: isLE2 });
    }
  }
  function _createCurveFields(type, CURVE, curveOpts = {}, FpFnLE) {
    if (FpFnLE === void 0)
      FpFnLE = type === "edwards";
    if (!CURVE || typeof CURVE !== "object")
      throw new Error(`expected valid ${type} CURVE object`);
    for (const p of ["p", "n", "h"]) {
      const val = CURVE[p];
      if (!(typeof val === "bigint" && val > _0n3))
        throw new Error(`CURVE.${p} must be positive bigint`);
    }
    const Fp = createField(CURVE.p, curveOpts.Fp, FpFnLE);
    const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
    const _b = type === "weierstrass" ? "b" : "d";
    const params = ["Gx", "Gy", "a", _b];
    for (const p of params) {
      if (!Fp.isValid(CURVE[p]))
        throw new Error(`CURVE.${p} must be valid field element of CURVE.Fp`);
    }
    CURVE = Object.freeze(Object.assign({}, CURVE));
    return { CURVE, Fp, Fn };
  }

  // node_modules/@noble/curves/esm/abstract/weierstrass.js
  var divNearest = (num, den) => (num + (num >= 0 ? den : -den) / _2n2) / den;
  function _splitEndoScalar(k, basis, n) {
    const [[a1, b1], [a2, b2]] = basis;
    const c1 = divNearest(b2 * k, n);
    const c2 = divNearest(-b1 * k, n);
    let k1 = k - c1 * a1 - c2 * a2;
    let k2 = -c1 * b1 - c2 * b2;
    const k1neg = k1 < _0n4;
    const k2neg = k2 < _0n4;
    if (k1neg)
      k1 = -k1;
    if (k2neg)
      k2 = -k2;
    const MAX_NUM = bitMask(Math.ceil(bitLen(n) / 2)) + _1n4;
    if (k1 < _0n4 || k1 >= MAX_NUM || k2 < _0n4 || k2 >= MAX_NUM) {
      throw new Error("splitScalar (endomorphism): failed, k=" + k);
    }
    return { k1neg, k1, k2neg, k2 };
  }
  function validateSigFormat(format) {
    if (!["compact", "recovered", "der"].includes(format))
      throw new Error('Signature format must be "compact", "recovered", or "der"');
    return format;
  }
  function validateSigOpts(opts, def) {
    const optsn = {};
    for (let optName of Object.keys(def)) {
      optsn[optName] = opts[optName] === void 0 ? def[optName] : opts[optName];
    }
    _abool2(optsn.lowS, "lowS");
    _abool2(optsn.prehash, "prehash");
    if (optsn.format !== void 0)
      validateSigFormat(optsn.format);
    return optsn;
  }
  var DERErr = class extends Error {
    constructor(m = "") {
      super(m);
    }
  };
  var DER = {
    // asn.1 DER encoding utils
    Err: DERErr,
    // Basic building block is TLV (Tag-Length-Value)
    _tlv: {
      encode: (tag, data) => {
        const { Err: E } = DER;
        if (tag < 0 || tag > 256)
          throw new E("tlv.encode: wrong tag");
        if (data.length & 1)
          throw new E("tlv.encode: unpadded data");
        const dataLen = data.length / 2;
        const len = numberToHexUnpadded(dataLen);
        if (len.length / 2 & 128)
          throw new E("tlv.encode: long form length too big");
        const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
        const t = numberToHexUnpadded(tag);
        return t + lenLen + len + data;
      },
      // v - value, l - left bytes (unparsed)
      decode(tag, data) {
        const { Err: E } = DER;
        let pos = 0;
        if (tag < 0 || tag > 256)
          throw new E("tlv.encode: wrong tag");
        if (data.length < 2 || data[pos++] !== tag)
          throw new E("tlv.decode: wrong tlv");
        const first = data[pos++];
        const isLong = !!(first & 128);
        let length = 0;
        if (!isLong)
          length = first;
        else {
          const lenLen = first & 127;
          if (!lenLen)
            throw new E("tlv.decode(long): indefinite length not supported");
          if (lenLen > 4)
            throw new E("tlv.decode(long): byte length is too big");
          const lengthBytes = data.subarray(pos, pos + lenLen);
          if (lengthBytes.length !== lenLen)
            throw new E("tlv.decode: length bytes not complete");
          if (lengthBytes[0] === 0)
            throw new E("tlv.decode(long): zero leftmost byte");
          for (const b of lengthBytes)
            length = length << 8 | b;
          pos += lenLen;
          if (length < 128)
            throw new E("tlv.decode(long): not minimal encoding");
        }
        const v = data.subarray(pos, pos + length);
        if (v.length !== length)
          throw new E("tlv.decode: wrong value length");
        return { v, l: data.subarray(pos + length) };
      }
    },
    // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
    // since we always use positive integers here. It must always be empty:
    // - add zero byte if exists
    // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
    _int: {
      encode(num) {
        const { Err: E } = DER;
        if (num < _0n4)
          throw new E("integer: negative integers are not allowed");
        let hex = numberToHexUnpadded(num);
        if (Number.parseInt(hex[0], 16) & 8)
          hex = "00" + hex;
        if (hex.length & 1)
          throw new E("unexpected DER parsing assertion: unpadded hex");
        return hex;
      },
      decode(data) {
        const { Err: E } = DER;
        if (data[0] & 128)
          throw new E("invalid signature integer: negative");
        if (data[0] === 0 && !(data[1] & 128))
          throw new E("invalid signature integer: unnecessary leading zero");
        return bytesToNumberBE(data);
      }
    },
    toSig(hex) {
      const { Err: E, _int: int, _tlv: tlv } = DER;
      const data = ensureBytes("signature", hex);
      const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
      if (seqLeftBytes.length)
        throw new E("invalid signature: left bytes after parsing");
      const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
      const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
      if (sLeftBytes.length)
        throw new E("invalid signature: left bytes after parsing");
      return { r: int.decode(rBytes), s: int.decode(sBytes) };
    },
    hexFromSig(sig) {
      const { _tlv: tlv, _int: int } = DER;
      const rs = tlv.encode(2, int.encode(sig.r));
      const ss = tlv.encode(2, int.encode(sig.s));
      const seq = rs + ss;
      return tlv.encode(48, seq);
    }
  };
  var _0n4 = BigInt(0);
  var _1n4 = BigInt(1);
  var _2n2 = BigInt(2);
  var _3n2 = BigInt(3);
  var _4n2 = BigInt(4);
  function _normFnElement(Fn, key) {
    const { BYTES: expected } = Fn;
    let num;
    if (typeof key === "bigint") {
      num = key;
    } else {
      let bytes = ensureBytes("private key", key);
      try {
        num = Fn.fromBytes(bytes);
      } catch (error) {
        throw new Error(`invalid private key: expected ui8a of size ${expected}, got ${typeof key}`);
      }
    }
    if (!Fn.isValidNot0(num))
      throw new Error("invalid private key: out of range [1..N-1]");
    return num;
  }
  function weierstrassN(params, extraOpts = {}) {
    const validated = _createCurveFields("weierstrass", params, extraOpts);
    const { Fp, Fn } = validated;
    let CURVE = validated.CURVE;
    const { h: cofactor, n: CURVE_ORDER } = CURVE;
    _validateObject(extraOpts, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean"
    });
    const { endo } = extraOpts;
    if (endo) {
      if (!Fp.is0(CURVE.a) || typeof endo.beta !== "bigint" || !Array.isArray(endo.basises)) {
        throw new Error('invalid endo: expected "beta": bigint and "basises": array');
      }
    }
    const lengths = getWLengths(Fp, Fn);
    function assertCompressionIsSupported() {
      if (!Fp.isOdd)
        throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function pointToBytes(_c, point, isCompressed) {
      const { x, y } = point.toAffine();
      const bx = Fp.toBytes(x);
      _abool2(isCompressed, "isCompressed");
      if (isCompressed) {
        assertCompressionIsSupported();
        const hasEvenY = !Fp.isOdd(y);
        return concatBytes(pprefix(hasEvenY), bx);
      } else {
        return concatBytes(Uint8Array.of(4), bx, Fp.toBytes(y));
      }
    }
    function pointFromBytes(bytes) {
      _abytes2(bytes, void 0, "Point");
      const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
      const length = bytes.length;
      const head = bytes[0];
      const tail = bytes.subarray(1);
      if (length === comp && (head === 2 || head === 3)) {
        const x = Fp.fromBytes(tail);
        if (!Fp.isValid(x))
          throw new Error("bad point: is not on curve, wrong x");
        const y2 = weierstrassEquation(x);
        let y;
        try {
          y = Fp.sqrt(y2);
        } catch (sqrtError) {
          const err = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + err);
        }
        assertCompressionIsSupported();
        const isYOdd = Fp.isOdd(y);
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y = Fp.neg(y);
        return { x, y };
      } else if (length === uncomp && head === 4) {
        const L = Fp.BYTES;
        const x = Fp.fromBytes(tail.subarray(0, L));
        const y = Fp.fromBytes(tail.subarray(L, L * 2));
        if (!isValidXY(x, y))
          throw new Error("bad point: is not on curve");
        return { x, y };
      } else {
        throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
      }
    }
    const encodePoint = extraOpts.toBytes || pointToBytes;
    const decodePoint = extraOpts.fromBytes || pointFromBytes;
    function weierstrassEquation(x) {
      const x2 = Fp.sqr(x);
      const x3 = Fp.mul(x2, x);
      return Fp.add(Fp.add(x3, Fp.mul(x, CURVE.a)), CURVE.b);
    }
    function isValidXY(x, y) {
      const left = Fp.sqr(y);
      const right = weierstrassEquation(x);
      return Fp.eql(left, right);
    }
    if (!isValidXY(CURVE.Gx, CURVE.Gy))
      throw new Error("bad curve params: generator point");
    const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n2), _4n2);
    const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
    if (Fp.is0(Fp.add(_4a3, _27b2)))
      throw new Error("bad curve params: a or b");
    function acoord(title, n, banZero = false) {
      if (!Fp.isValid(n) || banZero && Fp.is0(n))
        throw new Error(`bad point coordinate ${title}`);
      return n;
    }
    function aprjpoint(other) {
      if (!(other instanceof Point))
        throw new Error("ProjectivePoint expected");
    }
    function splitEndoScalarN(k) {
      if (!endo || !endo.basises)
        throw new Error("no endo");
      return _splitEndoScalar(k, endo.basises, Fn.ORDER);
    }
    const toAffineMemo = memoized((p, iz) => {
      const { X, Y, Z } = p;
      if (Fp.eql(Z, Fp.ONE))
        return { x: X, y: Y };
      const is0 = p.is0();
      if (iz == null)
        iz = is0 ? Fp.ONE : Fp.inv(Z);
      const x = Fp.mul(X, iz);
      const y = Fp.mul(Y, iz);
      const zz = Fp.mul(Z, iz);
      if (is0)
        return { x: Fp.ZERO, y: Fp.ZERO };
      if (!Fp.eql(zz, Fp.ONE))
        throw new Error("invZ was invalid");
      return { x, y };
    });
    const assertValidMemo = memoized((p) => {
      if (p.is0()) {
        if (extraOpts.allowInfinityPoint && !Fp.is0(p.Y))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x, y } = p.toAffine();
      if (!Fp.isValid(x) || !Fp.isValid(y))
        throw new Error("bad point: x or y not field elements");
      if (!isValidXY(x, y))
        throw new Error("bad point: equation left != right");
      if (!p.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function finishEndo(endoBeta, k1p, k2p, k1neg, k2neg) {
      k2p = new Point(Fp.mul(k2p.X, endoBeta), k2p.Y, k2p.Z);
      k1p = negateCt(k1neg, k1p);
      k2p = negateCt(k2neg, k2p);
      return k1p.add(k2p);
    }
    class Point {
      /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
      constructor(X, Y, Z) {
        this.X = acoord("x", X);
        this.Y = acoord("y", Y, true);
        this.Z = acoord("z", Z);
        Object.freeze(this);
      }
      static CURVE() {
        return CURVE;
      }
      /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
      static fromAffine(p) {
        const { x, y } = p || {};
        if (!p || !Fp.isValid(x) || !Fp.isValid(y))
          throw new Error("invalid affine point");
        if (p instanceof Point)
          throw new Error("projective point not allowed");
        if (Fp.is0(x) && Fp.is0(y))
          return Point.ZERO;
        return new Point(x, y, Fp.ONE);
      }
      static fromBytes(bytes) {
        const P = Point.fromAffine(decodePoint(_abytes2(bytes, void 0, "point")));
        P.assertValidity();
        return P;
      }
      static fromHex(hex) {
        return Point.fromBytes(ensureBytes("pointHex", hex));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       *
       * @param windowSize
       * @param isLazy true will defer table computation until the first multiplication
       * @returns
       */
      precompute(windowSize = 8, isLazy = true) {
        wnaf.createCache(this, windowSize);
        if (!isLazy)
          this.multiply(_3n2);
        return this;
      }
      // TODO: return `this`
      /** A point on curve is valid if it conforms to equation. */
      assertValidity() {
        assertValidMemo(this);
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (!Fp.isOdd)
          throw new Error("Field doesn't support isOdd");
        return !Fp.isOdd(y);
      }
      /** Compare one point to another. */
      equals(other) {
        aprjpoint(other);
        const { X: X1, Y: Y1, Z: Z1 } = this;
        const { X: X2, Y: Y2, Z: Z2 } = other;
        const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
        const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
        return U1 && U2;
      }
      /** Flips point to one corresponding to (x, -y) in Affine coordinates. */
      negate() {
        return new Point(this.X, Fp.neg(this.Y), this.Z);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a, b } = CURVE;
        const b3 = Fp.mul(b, _3n2);
        const { X: X1, Y: Y1, Z: Z1 } = this;
        let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
        let t0 = Fp.mul(X1, X1);
        let t1 = Fp.mul(Y1, Y1);
        let t2 = Fp.mul(Z1, Z1);
        let t3 = Fp.mul(X1, Y1);
        t3 = Fp.add(t3, t3);
        Z3 = Fp.mul(X1, Z1);
        Z3 = Fp.add(Z3, Z3);
        X3 = Fp.mul(a, Z3);
        Y3 = Fp.mul(b3, t2);
        Y3 = Fp.add(X3, Y3);
        X3 = Fp.sub(t1, Y3);
        Y3 = Fp.add(t1, Y3);
        Y3 = Fp.mul(X3, Y3);
        X3 = Fp.mul(t3, X3);
        Z3 = Fp.mul(b3, Z3);
        t2 = Fp.mul(a, t2);
        t3 = Fp.sub(t0, t2);
        t3 = Fp.mul(a, t3);
        t3 = Fp.add(t3, Z3);
        Z3 = Fp.add(t0, t0);
        t0 = Fp.add(Z3, t0);
        t0 = Fp.add(t0, t2);
        t0 = Fp.mul(t0, t3);
        Y3 = Fp.add(Y3, t0);
        t2 = Fp.mul(Y1, Z1);
        t2 = Fp.add(t2, t2);
        t0 = Fp.mul(t2, t3);
        X3 = Fp.sub(X3, t0);
        Z3 = Fp.mul(t2, t1);
        Z3 = Fp.add(Z3, Z3);
        Z3 = Fp.add(Z3, Z3);
        return new Point(X3, Y3, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        aprjpoint(other);
        const { X: X1, Y: Y1, Z: Z1 } = this;
        const { X: X2, Y: Y2, Z: Z2 } = other;
        let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
        const a = CURVE.a;
        const b3 = Fp.mul(CURVE.b, _3n2);
        let t0 = Fp.mul(X1, X2);
        let t1 = Fp.mul(Y1, Y2);
        let t2 = Fp.mul(Z1, Z2);
        let t3 = Fp.add(X1, Y1);
        let t4 = Fp.add(X2, Y2);
        t3 = Fp.mul(t3, t4);
        t4 = Fp.add(t0, t1);
        t3 = Fp.sub(t3, t4);
        t4 = Fp.add(X1, Z1);
        let t5 = Fp.add(X2, Z2);
        t4 = Fp.mul(t4, t5);
        t5 = Fp.add(t0, t2);
        t4 = Fp.sub(t4, t5);
        t5 = Fp.add(Y1, Z1);
        X3 = Fp.add(Y2, Z2);
        t5 = Fp.mul(t5, X3);
        X3 = Fp.add(t1, t2);
        t5 = Fp.sub(t5, X3);
        Z3 = Fp.mul(a, t4);
        X3 = Fp.mul(b3, t2);
        Z3 = Fp.add(X3, Z3);
        X3 = Fp.sub(t1, Z3);
        Z3 = Fp.add(t1, Z3);
        Y3 = Fp.mul(X3, Z3);
        t1 = Fp.add(t0, t0);
        t1 = Fp.add(t1, t0);
        t2 = Fp.mul(a, t2);
        t4 = Fp.mul(b3, t4);
        t1 = Fp.add(t1, t2);
        t2 = Fp.sub(t0, t2);
        t2 = Fp.mul(a, t2);
        t4 = Fp.add(t4, t2);
        t0 = Fp.mul(t1, t4);
        Y3 = Fp.add(Y3, t0);
        t0 = Fp.mul(t5, t4);
        X3 = Fp.mul(t3, X3);
        X3 = Fp.sub(X3, t0);
        t0 = Fp.mul(t3, t1);
        Z3 = Fp.mul(t5, Z3);
        Z3 = Fp.add(Z3, t0);
        return new Point(X3, Y3, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      is0() {
        return this.equals(Point.ZERO);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        const { endo: endo2 } = extraOpts;
        if (!Fn.isValidNot0(scalar))
          throw new Error("invalid scalar: out of range");
        let point, fake;
        const mul3 = (n) => wnaf.cached(this, n, (p) => normalizeZ(Point, p));
        if (endo2) {
          const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(scalar);
          const { p: k1p, f: k1f } = mul3(k1);
          const { p: k2p, f: k2f } = mul3(k2);
          fake = k1f.add(k2f);
          point = finishEndo(endo2.beta, k1p, k2p, k1neg, k2neg);
        } else {
          const { p, f } = mul3(scalar);
          point = p;
          fake = f;
        }
        return normalizeZ(Point, [point, fake])[0];
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed secret key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(sc) {
        const { endo: endo2 } = extraOpts;
        const p = this;
        if (!Fn.isValid(sc))
          throw new Error("invalid scalar: out of range");
        if (sc === _0n4 || p.is0())
          return Point.ZERO;
        if (sc === _1n4)
          return p;
        if (wnaf.hasCache(this))
          return this.multiply(sc);
        if (endo2) {
          const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(sc);
          const { p1, p2 } = mulEndoUnsafe(Point, p, k1, k2);
          return finishEndo(endo2.beta, p1, p2, k1neg, k2neg);
        } else {
          return wnaf.unsafe(p, sc);
        }
      }
      multiplyAndAddUnsafe(Q, a, b) {
        const sum = this.multiplyUnsafe(a).add(Q.multiplyUnsafe(b));
        return sum.is0() ? void 0 : sum;
      }
      /**
       * Converts Projective point to affine (x, y) coordinates.
       * @param invertedZ Z^-1 (inverted zero) - optional, precomputation is useful for invertBatch
       */
      toAffine(invertedZ) {
        return toAffineMemo(this, invertedZ);
      }
      /**
       * Checks whether Point is free of torsion elements (is in prime subgroup).
       * Always torsion-free for cofactor=1 curves.
       */
      isTorsionFree() {
        const { isTorsionFree } = extraOpts;
        if (cofactor === _1n4)
          return true;
        if (isTorsionFree)
          return isTorsionFree(Point, this);
        return wnaf.unsafe(this, CURVE_ORDER).is0();
      }
      clearCofactor() {
        const { clearCofactor } = extraOpts;
        if (cofactor === _1n4)
          return this;
        if (clearCofactor)
          return clearCofactor(Point, this);
        return this.multiplyUnsafe(cofactor);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(cofactor).is0();
      }
      toBytes(isCompressed = true) {
        _abool2(isCompressed, "isCompressed");
        this.assertValidity();
        return encodePoint(Point, this, isCompressed);
      }
      toHex(isCompressed = true) {
        return bytesToHex(this.toBytes(isCompressed));
      }
      toString() {
        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
      }
      // TODO: remove
      get px() {
        return this.X;
      }
      get py() {
        return this.X;
      }
      get pz() {
        return this.Z;
      }
      toRawBytes(isCompressed = true) {
        return this.toBytes(isCompressed);
      }
      _setWindowSize(windowSize) {
        this.precompute(windowSize);
      }
      static normalizeZ(points) {
        return normalizeZ(Point, points);
      }
      static msm(points, scalars) {
        return pippenger(Point, Fn, points, scalars);
      }
      static fromPrivateKey(privateKey) {
        return Point.BASE.multiply(_normFnElement(Fn, privateKey));
      }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
    Point.Fp = Fp;
    Point.Fn = Fn;
    const bits = Fn.BITS;
    const wnaf = new wNAF(Point, extraOpts.endo ? Math.ceil(bits / 2) : bits);
    Point.BASE.precompute(8);
    return Point;
  }
  function pprefix(hasEvenY) {
    return Uint8Array.of(hasEvenY ? 2 : 3);
  }
  function getWLengths(Fp, Fn) {
    return {
      secretKey: Fn.BYTES,
      publicKey: 1 + Fp.BYTES,
      publicKeyUncompressed: 1 + 2 * Fp.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * Fn.BYTES
    };
  }
  function ecdh(Point, ecdhOpts = {}) {
    const { Fn } = Point;
    const randomBytes_ = ecdhOpts.randomBytes || randomBytes;
    const lengths = Object.assign(getWLengths(Point.Fp, Fn), { seed: getMinHashLength(Fn.ORDER) });
    function isValidSecretKey(secretKey) {
      try {
        return !!_normFnElement(Fn, secretKey);
      } catch (error) {
        return false;
      }
    }
    function isValidPublicKey(publicKey2, isCompressed) {
      const { publicKey: comp, publicKeyUncompressed } = lengths;
      try {
        const l = publicKey2.length;
        if (isCompressed === true && l !== comp)
          return false;
        if (isCompressed === false && l !== publicKeyUncompressed)
          return false;
        return !!Point.fromBytes(publicKey2);
      } catch (error) {
        return false;
      }
    }
    function randomSecretKey(seed = randomBytes_(lengths.seed)) {
      return mapHashToField(_abytes2(seed, lengths.seed, "seed"), Fn.ORDER);
    }
    function getPublicKey(secretKey, isCompressed = true) {
      return Point.BASE.multiply(_normFnElement(Fn, secretKey)).toBytes(isCompressed);
    }
    function keygen(seed) {
      const secretKey = randomSecretKey(seed);
      return { secretKey, publicKey: getPublicKey(secretKey) };
    }
    function isProbPub(item) {
      if (typeof item === "bigint")
        return false;
      if (item instanceof Point)
        return true;
      const { secretKey, publicKey: publicKey2, publicKeyUncompressed } = lengths;
      if (Fn.allowedLengths || secretKey === publicKey2)
        return void 0;
      const l = ensureBytes("key", item).length;
      return l === publicKey2 || l === publicKeyUncompressed;
    }
    function getSharedSecret(secretKeyA, publicKeyB, isCompressed = true) {
      if (isProbPub(secretKeyA) === true)
        throw new Error("first arg must be private key");
      if (isProbPub(publicKeyB) === false)
        throw new Error("second arg must be public key");
      const s = _normFnElement(Fn, secretKeyA);
      const b = Point.fromHex(publicKeyB);
      return b.multiply(s).toBytes(isCompressed);
    }
    const utils = {
      isValidSecretKey,
      isValidPublicKey,
      randomSecretKey,
      // TODO: remove
      isValidPrivateKey: isValidSecretKey,
      randomPrivateKey: randomSecretKey,
      normPrivateKeyToScalar: (key) => _normFnElement(Fn, key),
      precompute(windowSize = 8, point = Point.BASE) {
        return point.precompute(windowSize, false);
      }
    };
    return Object.freeze({ getPublicKey, getSharedSecret, keygen, Point, utils, lengths });
  }
  function ecdsa(Point, hash, ecdsaOpts = {}) {
    ahash(hash);
    _validateObject(ecdsaOpts, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const randomBytes3 = ecdsaOpts.randomBytes || randomBytes;
    const hmac2 = ecdsaOpts.hmac || ((key, ...msgs) => hmac(hash, key, concatBytes(...msgs)));
    const { Fp, Fn } = Point;
    const { ORDER: CURVE_ORDER, BITS: fnBits } = Fn;
    const { keygen, getPublicKey, getSharedSecret, utils, lengths } = ecdh(Point, ecdsaOpts);
    const defaultSigOpts = {
      prehash: false,
      lowS: typeof ecdsaOpts.lowS === "boolean" ? ecdsaOpts.lowS : false,
      format: void 0,
      //'compact' as ECDSASigFormat,
      extraEntropy: false
    };
    const defaultSigOpts_format = "compact";
    function isBiggerThanHalfOrder(number) {
      const HALF = CURVE_ORDER >> _1n4;
      return number > HALF;
    }
    function validateRS(title, num) {
      if (!Fn.isValidNot0(num))
        throw new Error(`invalid signature ${title}: out of range 1..Point.Fn.ORDER`);
      return num;
    }
    function validateSigLength(bytes, format) {
      validateSigFormat(format);
      const size = lengths.signature;
      const sizer = format === "compact" ? size : format === "recovered" ? size + 1 : void 0;
      return _abytes2(bytes, sizer, `${format} signature`);
    }
    class Signature {
      constructor(r, s, recovery) {
        this.r = validateRS("r", r);
        this.s = validateRS("s", s);
        if (recovery != null)
          this.recovery = recovery;
        Object.freeze(this);
      }
      static fromBytes(bytes, format = defaultSigOpts_format) {
        validateSigLength(bytes, format);
        let recid;
        if (format === "der") {
          const { r: r2, s: s2 } = DER.toSig(_abytes2(bytes));
          return new Signature(r2, s2);
        }
        if (format === "recovered") {
          recid = bytes[0];
          format = "compact";
          bytes = bytes.subarray(1);
        }
        const L = Fn.BYTES;
        const r = bytes.subarray(0, L);
        const s = bytes.subarray(L, L * 2);
        return new Signature(Fn.fromBytes(r), Fn.fromBytes(s), recid);
      }
      static fromHex(hex, format) {
        return this.fromBytes(hexToBytes(hex), format);
      }
      addRecoveryBit(recovery) {
        return new Signature(this.r, this.s, recovery);
      }
      recoverPublicKey(messageHash) {
        const FIELD_ORDER = Fp.ORDER;
        const { r, s, recovery: rec } = this;
        if (rec == null || ![0, 1, 2, 3].includes(rec))
          throw new Error("recovery id invalid");
        const hasCofactor = CURVE_ORDER * _2n2 < FIELD_ORDER;
        if (hasCofactor && rec > 1)
          throw new Error("recovery id is ambiguous for h>1 curve");
        const radj = rec === 2 || rec === 3 ? r + CURVE_ORDER : r;
        if (!Fp.isValid(radj))
          throw new Error("recovery id 2 or 3 invalid");
        const x = Fp.toBytes(radj);
        const R = Point.fromBytes(concatBytes(pprefix((rec & 1) === 0), x));
        const ir = Fn.inv(radj);
        const h = bits2int_modN(ensureBytes("msgHash", messageHash));
        const u1 = Fn.create(-h * ir);
        const u2 = Fn.create(s * ir);
        const Q = Point.BASE.multiplyUnsafe(u1).add(R.multiplyUnsafe(u2));
        if (Q.is0())
          throw new Error("point at infinify");
        Q.assertValidity();
        return Q;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      toBytes(format = defaultSigOpts_format) {
        validateSigFormat(format);
        if (format === "der")
          return hexToBytes(DER.hexFromSig(this));
        const r = Fn.toBytes(this.r);
        const s = Fn.toBytes(this.s);
        if (format === "recovered") {
          if (this.recovery == null)
            throw new Error("recovery bit must be present");
          return concatBytes(Uint8Array.of(this.recovery), r, s);
        }
        return concatBytes(r, s);
      }
      toHex(format) {
        return bytesToHex(this.toBytes(format));
      }
      // TODO: remove
      assertValidity() {
      }
      static fromCompact(hex) {
        return Signature.fromBytes(ensureBytes("sig", hex), "compact");
      }
      static fromDER(hex) {
        return Signature.fromBytes(ensureBytes("sig", hex), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new Signature(this.r, Fn.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return bytesToHex(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return bytesToHex(this.toBytes("compact"));
      }
    }
    const bits2int = ecdsaOpts.bits2int || function bits2int_def(bytes) {
      if (bytes.length > 8192)
        throw new Error("input is too large");
      const num = bytesToNumberBE(bytes);
      const delta = bytes.length * 8 - fnBits;
      return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = ecdsaOpts.bits2int_modN || function bits2int_modN_def(bytes) {
      return Fn.create(bits2int(bytes));
    };
    const ORDER_MASK = bitMask(fnBits);
    function int2octets(num) {
      aInRange("num < 2^" + fnBits, num, _0n4, ORDER_MASK);
      return Fn.toBytes(num);
    }
    function validateMsgAndHash(message, prehash) {
      _abytes2(message, void 0, "message");
      return prehash ? _abytes2(hash(message), void 0, "prehashed message") : message;
    }
    function prepSig(message, privateKey, opts) {
      if (["recovered", "canonical"].some((k) => k in opts))
        throw new Error("sign() legacy options not supported");
      const { lowS, prehash, extraEntropy } = validateSigOpts(opts, defaultSigOpts);
      message = validateMsgAndHash(message, prehash);
      const h1int = bits2int_modN(message);
      const d = _normFnElement(Fn, privateKey);
      const seedArgs = [int2octets(d), int2octets(h1int)];
      if (extraEntropy != null && extraEntropy !== false) {
        const e = extraEntropy === true ? randomBytes3(lengths.secretKey) : extraEntropy;
        seedArgs.push(ensureBytes("extraEntropy", e));
      }
      const seed = concatBytes(...seedArgs);
      const m = h1int;
      function k2sig(kBytes) {
        const k = bits2int(kBytes);
        if (!Fn.isValidNot0(k))
          return;
        const ik = Fn.inv(k);
        const q = Point.BASE.multiply(k).toAffine();
        const r = Fn.create(q.x);
        if (r === _0n4)
          return;
        const s = Fn.create(ik * Fn.create(m + r * d));
        if (s === _0n4)
          return;
        let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n4);
        let normS = s;
        if (lowS && isBiggerThanHalfOrder(s)) {
          normS = Fn.neg(s);
          recovery ^= 1;
        }
        return new Signature(r, normS, recovery);
      }
      return { seed, k2sig };
    }
    function sign(message, secretKey, opts = {}) {
      message = ensureBytes("message", message);
      const { seed, k2sig } = prepSig(message, secretKey, opts);
      const drbg = createHmacDrbg(hash.outputLen, Fn.BYTES, hmac2);
      const sig = drbg(seed, k2sig);
      return sig;
    }
    function tryParsingSig(sg) {
      let sig = void 0;
      const isHex = typeof sg === "string" || isBytes(sg);
      const isObj = !isHex && sg !== null && typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint";
      if (!isHex && !isObj)
        throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (isObj) {
        sig = new Signature(sg.r, sg.s);
      } else if (isHex) {
        try {
          sig = Signature.fromBytes(ensureBytes("sig", sg), "der");
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
        }
        if (!sig) {
          try {
            sig = Signature.fromBytes(ensureBytes("sig", sg), "compact");
          } catch (error) {
            return false;
          }
        }
      }
      if (!sig)
        return false;
      return sig;
    }
    function verify(signature, message, publicKey2, opts = {}) {
      const { lowS, prehash, format } = validateSigOpts(opts, defaultSigOpts);
      publicKey2 = ensureBytes("publicKey", publicKey2);
      message = validateMsgAndHash(ensureBytes("message", message), prehash);
      if ("strict" in opts)
        throw new Error("options.strict was renamed to lowS");
      const sig = format === void 0 ? tryParsingSig(signature) : Signature.fromBytes(ensureBytes("sig", signature), format);
      if (sig === false)
        return false;
      try {
        const P = Point.fromBytes(publicKey2);
        if (lowS && sig.hasHighS())
          return false;
        const { r, s } = sig;
        const h = bits2int_modN(message);
        const is = Fn.inv(s);
        const u1 = Fn.create(h * is);
        const u2 = Fn.create(r * is);
        const R = Point.BASE.multiplyUnsafe(u1).add(P.multiplyUnsafe(u2));
        if (R.is0())
          return false;
        const v = Fn.create(R.x);
        return v === r;
      } catch (e) {
        return false;
      }
    }
    function recoverPublicKey(signature, message, opts = {}) {
      const { prehash } = validateSigOpts(opts, defaultSigOpts);
      message = validateMsgAndHash(message, prehash);
      return Signature.fromBytes(signature, "recovered").recoverPublicKey(message).toBytes();
    }
    return Object.freeze({
      keygen,
      getPublicKey,
      getSharedSecret,
      utils,
      lengths,
      Point,
      sign,
      verify,
      recoverPublicKey,
      Signature,
      hash
    });
  }
  function _weierstrass_legacy_opts_to_new(c) {
    const CURVE = {
      a: c.a,
      b: c.b,
      p: c.Fp.ORDER,
      n: c.n,
      h: c.h,
      Gx: c.Gx,
      Gy: c.Gy
    };
    const Fp = c.Fp;
    let allowedLengths = c.allowedPrivateKeyLengths ? Array.from(new Set(c.allowedPrivateKeyLengths.map((l) => Math.ceil(l / 2)))) : void 0;
    const Fn = Field(CURVE.n, {
      BITS: c.nBitLength,
      allowedLengths,
      modFromBytes: c.wrapPrivateKey
    });
    const curveOpts = {
      Fp,
      Fn,
      allowInfinityPoint: c.allowInfinityPoint,
      endo: c.endo,
      isTorsionFree: c.isTorsionFree,
      clearCofactor: c.clearCofactor,
      fromBytes: c.fromBytes,
      toBytes: c.toBytes
    };
    return { CURVE, curveOpts };
  }
  function _ecdsa_legacy_opts_to_new(c) {
    const { CURVE, curveOpts } = _weierstrass_legacy_opts_to_new(c);
    const ecdsaOpts = {
      hmac: c.hmac,
      randomBytes: c.randomBytes,
      lowS: c.lowS,
      bits2int: c.bits2int,
      bits2int_modN: c.bits2int_modN
    };
    return { CURVE, curveOpts, hash: c.hash, ecdsaOpts };
  }
  function _ecdsa_new_output_to_legacy(c, _ecdsa) {
    const Point = _ecdsa.Point;
    return Object.assign({}, _ecdsa, {
      ProjectivePoint: Point,
      CURVE: Object.assign({}, c, nLength(Point.Fn.ORDER, Point.Fn.BITS))
    });
  }
  function weierstrass(c) {
    const { CURVE, curveOpts, hash, ecdsaOpts } = _ecdsa_legacy_opts_to_new(c);
    const Point = weierstrassN(CURVE, curveOpts);
    const signs = ecdsa(Point, hash, ecdsaOpts);
    return _ecdsa_new_output_to_legacy(c, signs);
  }

  // node_modules/@noble/curves/esm/_shortw_utils.js
  function createCurve(curveDef, defHash) {
    const create = (hash) => weierstrass({ ...curveDef, hash });
    return { ...create(defHash), create };
  }

  // node_modules/@noble/curves/esm/nist.js
  var p256_CURVE = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  };
  var p384_CURVE = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  };
  var p521_CURVE = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  };
  var Fp256 = Field(p256_CURVE.p);
  var Fp384 = Field(p384_CURVE.p);
  var Fp521 = Field(p521_CURVE.p);
  var p256 = createCurve({ ...p256_CURVE, Fp: Fp256, lowS: false }, sha256);
  var p384 = createCurve({ ...p384_CURVE, Fp: Fp384, lowS: false }, sha384);
  var p521 = createCurve({ ...p521_CURVE, Fp: Fp521, lowS: false, allowedPrivateKeyLengths: [130, 131, 132] }, sha512);

  // node_modules/@noble/curves/esm/p256.js
  var p2562 = p256;

  // node_modules/@noble/hashes/esm/sha256.js
  var sha2562 = sha256;

  // node_modules/@noble/hashes/esm/hkdf.js
  function extract(hash, ikm, salt) {
    ahash(hash);
    if (salt === void 0)
      salt = new Uint8Array(hash.outputLen);
    return hmac(hash, toBytes(salt), toBytes(ikm));
  }
  var HKDF_COUNTER = /* @__PURE__ */ Uint8Array.from([0]);
  var EMPTY_BUFFER = /* @__PURE__ */ Uint8Array.of();
  function expand(hash, prk, info, length = 32) {
    ahash(hash);
    anumber(length);
    const olen = hash.outputLen;
    if (length > 255 * olen)
      throw new Error("Length should be <= 255*HashLen");
    const blocks = Math.ceil(length / olen);
    if (info === void 0)
      info = EMPTY_BUFFER;
    const okm = new Uint8Array(blocks * olen);
    const HMAC2 = hmac.create(hash, prk);
    const HMACTmp = HMAC2._cloneInto();
    const T = new Uint8Array(HMAC2.outputLen);
    for (let counter = 0; counter < blocks; counter++) {
      HKDF_COUNTER[0] = counter + 1;
      HMACTmp.update(counter === 0 ? EMPTY_BUFFER : T).update(info).update(HKDF_COUNTER).digestInto(T);
      okm.set(T, olen * counter);
      HMAC2._cloneInto(HMACTmp);
    }
    HMAC2.destroy();
    HMACTmp.destroy();
    clean2(T, HKDF_COUNTER);
    return okm.slice(0, length);
  }
  var hkdf = (hash, ikm, salt, info, length) => expand(hash, extract(hash, ikm, salt), info, length);

  // node_modules/@noble/hashes/esm/pbkdf2.js
  function pbkdf2Init(hash, _password, _salt, _opts) {
    ahash(hash);
    const opts = checkOpts({ dkLen: 32, asyncTick: 10 }, _opts);
    const { c, dkLen, asyncTick } = opts;
    anumber(c);
    anumber(dkLen);
    anumber(asyncTick);
    if (c < 1)
      throw new Error("iterations (c) should be >= 1");
    const password = kdfInputToBytes(_password);
    const salt = kdfInputToBytes(_salt);
    const DK = new Uint8Array(dkLen);
    const PRF = hmac.create(hash, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
  }
  function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW)
      prfW.destroy();
    clean2(u);
    return DK;
  }
  function pbkdf2(hash, password, salt, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW;
    const arr = new Uint8Array(4);
    const view = createView(arr);
    const u = new Uint8Array(PRF.outputLen);
    for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
      const Ti = DK.subarray(pos, pos + PRF.outputLen);
      view.setInt32(0, ti, false);
      (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
      Ti.set(u.subarray(0, Ti.length));
      for (let ui = 1; ui < c; ui++) {
        PRF._cloneInto(prfW).update(u).digestInto(u);
        for (let i = 0; i < Ti.length; i++)
          Ti[i] ^= u[i];
      }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
  }

  // node_modules/@noble/ciphers/esm/utils.js
  function isBytes2(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
  }
  function abool(b) {
    if (typeof b !== "boolean")
      throw new Error(`boolean expected, not ${b}`);
  }
  function abytes2(b, ...lengths) {
    if (!isBytes2(b))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b.length))
      throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
  }
  function aexists2(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function aoutput2(out, instance) {
    abytes2(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error("digestInto() expects output buffer of length at least " + min);
    }
  }
  function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  }
  function clean3(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].fill(0);
    }
  }
  function createView2(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  var isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
  function utf8ToBytes2(str) {
    if (typeof str !== "string")
      throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes2(data) {
    if (typeof data === "string")
      data = utf8ToBytes2(data);
    else if (isBytes2(data))
      data = copyBytes(data);
    else
      throw new Error("Uint8Array expected, got " + typeof data);
    return data;
  }
  function equalBytes(a, b) {
    if (a.length !== b.length)
      return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
      diff |= a[i] ^ b[i];
    return diff === 0;
  }
  var wrapCipher = /* @__NO_SIDE_EFFECTS__ */ (params, constructor) => {
    function wrappedCipher(key, ...args) {
      abytes2(key);
      if (!isLE)
        throw new Error("Non little-endian hardware is not yet supported");
      if (params.nonceLength !== void 0) {
        const nonce = args[0];
        if (!nonce)
          throw new Error("nonce / iv required");
        if (params.varSizeNonce)
          abytes2(nonce);
        else
          abytes2(nonce, params.nonceLength);
      }
      const tagl = params.tagLength;
      if (tagl && args[1] !== void 0) {
        abytes2(args[1]);
      }
      const cipher = constructor(key, ...args);
      const checkOutput = (fnLength, output) => {
        if (output !== void 0) {
          if (fnLength !== 2)
            throw new Error("cipher output not supported");
          abytes2(output);
        }
      };
      let called = false;
      const wrCipher = {
        encrypt(data, output) {
          if (called)
            throw new Error("cannot encrypt() twice with same key + nonce");
          called = true;
          abytes2(data);
          checkOutput(cipher.encrypt.length, output);
          return cipher.encrypt(data, output);
        },
        decrypt(data, output) {
          abytes2(data);
          if (tagl && data.length < tagl)
            throw new Error("invalid ciphertext length: smaller than tagLength=" + tagl);
          checkOutput(cipher.decrypt.length, output);
          return cipher.decrypt(data, output);
        }
      };
      return wrCipher;
    }
    Object.assign(wrappedCipher, params);
    return wrappedCipher;
  };
  function getOutput(expectedLength, out, onlyAligned = true) {
    if (out === void 0)
      return new Uint8Array(expectedLength);
    if (out.length !== expectedLength)
      throw new Error("invalid output length, expected " + expectedLength + ", got: " + out.length);
    if (onlyAligned && !isAligned32(out))
      throw new Error("invalid output, must be aligned");
    return out;
  }
  function setBigUint642(view, byteOffset, value, isLE2) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE2);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE2 ? 4 : 0;
    const l = isLE2 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE2);
    view.setUint32(byteOffset + l, wl, isLE2);
  }
  function u64Lengths(dataLength, aadLength, isLE2) {
    abool(isLE2);
    const num = new Uint8Array(16);
    const view = createView2(num);
    setBigUint642(view, 0, BigInt(aadLength), isLE2);
    setBigUint642(view, 8, BigInt(dataLength), isLE2);
    return num;
  }
  function isAligned32(bytes) {
    return bytes.byteOffset % 4 === 0;
  }
  function copyBytes(bytes) {
    return Uint8Array.from(bytes);
  }

  // node_modules/@noble/ciphers/esm/_polyval.js
  var BLOCK_SIZE = 16;
  var ZEROS16 = /* @__PURE__ */ new Uint8Array(16);
  var ZEROS32 = u32(ZEROS16);
  var POLY = 225;
  var mul2 = (s0, s1, s2, s3) => {
    const hiBit = s3 & 1;
    return {
      s3: s2 << 31 | s3 >>> 1,
      s2: s1 << 31 | s2 >>> 1,
      s1: s0 << 31 | s1 >>> 1,
      s0: s0 >>> 1 ^ POLY << 24 & -(hiBit & 1)
      // reduce % poly
    };
  };
  var swapLE = (n) => (n >>> 0 & 255) << 24 | (n >>> 8 & 255) << 16 | (n >>> 16 & 255) << 8 | n >>> 24 & 255 | 0;
  function _toGHASHKey(k) {
    k.reverse();
    const hiBit = k[15] & 1;
    let carry = 0;
    for (let i = 0; i < k.length; i++) {
      const t = k[i];
      k[i] = t >>> 1 | carry;
      carry = (t & 1) << 7;
    }
    k[0] ^= -hiBit & 225;
    return k;
  }
  var estimateWindow = (bytes) => {
    if (bytes > 64 * 1024)
      return 8;
    if (bytes > 1024)
      return 4;
    return 2;
  };
  var GHASH = class {
    // We select bits per window adaptively based on expectedLength
    constructor(key, expectedLength) {
      this.blockLen = BLOCK_SIZE;
      this.outputLen = BLOCK_SIZE;
      this.s0 = 0;
      this.s1 = 0;
      this.s2 = 0;
      this.s3 = 0;
      this.finished = false;
      key = toBytes2(key);
      abytes2(key, 16);
      const kView = createView2(key);
      let k0 = kView.getUint32(0, false);
      let k1 = kView.getUint32(4, false);
      let k2 = kView.getUint32(8, false);
      let k3 = kView.getUint32(12, false);
      const doubles = [];
      for (let i = 0; i < 128; i++) {
        doubles.push({ s0: swapLE(k0), s1: swapLE(k1), s2: swapLE(k2), s3: swapLE(k3) });
        ({ s0: k0, s1: k1, s2: k2, s3: k3 } = mul2(k0, k1, k2, k3));
      }
      const W = estimateWindow(expectedLength || 1024);
      if (![1, 2, 4, 8].includes(W))
        throw new Error("ghash: invalid window size, expected 2, 4 or 8");
      this.W = W;
      const bits = 128;
      const windows = bits / W;
      const windowSize = this.windowSize = 2 ** W;
      const items = [];
      for (let w = 0; w < windows; w++) {
        for (let byte = 0; byte < windowSize; byte++) {
          let s0 = 0, s1 = 0, s2 = 0, s3 = 0;
          for (let j = 0; j < W; j++) {
            const bit = byte >>> W - j - 1 & 1;
            if (!bit)
              continue;
            const { s0: d0, s1: d1, s2: d2, s3: d3 } = doubles[W * w + j];
            s0 ^= d0, s1 ^= d1, s2 ^= d2, s3 ^= d3;
          }
          items.push({ s0, s1, s2, s3 });
        }
      }
      this.t = items;
    }
    _updateBlock(s0, s1, s2, s3) {
      s0 ^= this.s0, s1 ^= this.s1, s2 ^= this.s2, s3 ^= this.s3;
      const { W, t, windowSize } = this;
      let o0 = 0, o1 = 0, o2 = 0, o3 = 0;
      const mask = (1 << W) - 1;
      let w = 0;
      for (const num of [s0, s1, s2, s3]) {
        for (let bytePos = 0; bytePos < 4; bytePos++) {
          const byte = num >>> 8 * bytePos & 255;
          for (let bitPos = 8 / W - 1; bitPos >= 0; bitPos--) {
            const bit = byte >>> W * bitPos & mask;
            const { s0: e0, s1: e1, s2: e2, s3: e3 } = t[w * windowSize + bit];
            o0 ^= e0, o1 ^= e1, o2 ^= e2, o3 ^= e3;
            w += 1;
          }
        }
      }
      this.s0 = o0;
      this.s1 = o1;
      this.s2 = o2;
      this.s3 = o3;
    }
    update(data) {
      aexists2(this);
      data = toBytes2(data);
      abytes2(data);
      const b32 = u32(data);
      const blocks = Math.floor(data.length / BLOCK_SIZE);
      const left = data.length % BLOCK_SIZE;
      for (let i = 0; i < blocks; i++) {
        this._updateBlock(b32[i * 4 + 0], b32[i * 4 + 1], b32[i * 4 + 2], b32[i * 4 + 3]);
      }
      if (left) {
        ZEROS16.set(data.subarray(blocks * BLOCK_SIZE));
        this._updateBlock(ZEROS32[0], ZEROS32[1], ZEROS32[2], ZEROS32[3]);
        clean3(ZEROS32);
      }
      return this;
    }
    destroy() {
      const { t } = this;
      for (const elm of t) {
        elm.s0 = 0, elm.s1 = 0, elm.s2 = 0, elm.s3 = 0;
      }
    }
    digestInto(out) {
      aexists2(this);
      aoutput2(out, this);
      this.finished = true;
      const { s0, s1, s2, s3 } = this;
      const o32 = u32(out);
      o32[0] = s0;
      o32[1] = s1;
      o32[2] = s2;
      o32[3] = s3;
      return out;
    }
    digest() {
      const res = new Uint8Array(BLOCK_SIZE);
      this.digestInto(res);
      this.destroy();
      return res;
    }
  };
  var Polyval = class extends GHASH {
    constructor(key, expectedLength) {
      key = toBytes2(key);
      abytes2(key);
      const ghKey = _toGHASHKey(copyBytes(key));
      super(ghKey, expectedLength);
      clean3(ghKey);
    }
    update(data) {
      data = toBytes2(data);
      aexists2(this);
      const b32 = u32(data);
      const left = data.length % BLOCK_SIZE;
      const blocks = Math.floor(data.length / BLOCK_SIZE);
      for (let i = 0; i < blocks; i++) {
        this._updateBlock(swapLE(b32[i * 4 + 3]), swapLE(b32[i * 4 + 2]), swapLE(b32[i * 4 + 1]), swapLE(b32[i * 4 + 0]));
      }
      if (left) {
        ZEROS16.set(data.subarray(blocks * BLOCK_SIZE));
        this._updateBlock(swapLE(ZEROS32[3]), swapLE(ZEROS32[2]), swapLE(ZEROS32[1]), swapLE(ZEROS32[0]));
        clean3(ZEROS32);
      }
      return this;
    }
    digestInto(out) {
      aexists2(this);
      aoutput2(out, this);
      this.finished = true;
      const { s0, s1, s2, s3 } = this;
      const o32 = u32(out);
      o32[0] = s0;
      o32[1] = s1;
      o32[2] = s2;
      o32[3] = s3;
      return out.reverse();
    }
  };
  function wrapConstructorWithKey(hashCons) {
    const hashC = (msg, key) => hashCons(key, msg.length).update(toBytes2(msg)).digest();
    const tmp = hashCons(new Uint8Array(16), 0);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (key, expectedLength) => hashCons(key, expectedLength);
    return hashC;
  }
  var ghash = wrapConstructorWithKey((key, expectedLength) => new GHASH(key, expectedLength));
  var polyval = wrapConstructorWithKey((key, expectedLength) => new Polyval(key, expectedLength));

  // node_modules/@noble/ciphers/esm/aes.js
  var BLOCK_SIZE2 = 16;
  var BLOCK_SIZE32 = 4;
  var EMPTY_BLOCK = /* @__PURE__ */ new Uint8Array(BLOCK_SIZE2);
  var POLY2 = 283;
  function mul22(n) {
    return n << 1 ^ POLY2 & -(n >> 7);
  }
  function mul(a, b) {
    let res = 0;
    for (; b > 0; b >>= 1) {
      res ^= a & -(b & 1);
      a = mul22(a);
    }
    return res;
  }
  var sbox = /* @__PURE__ */ (() => {
    const t = new Uint8Array(256);
    for (let i = 0, x = 1; i < 256; i++, x ^= mul22(x))
      t[i] = x;
    const box = new Uint8Array(256);
    box[0] = 99;
    for (let i = 0; i < 255; i++) {
      let x = t[255 - i];
      x |= x << 8;
      box[t[i]] = (x ^ x >> 4 ^ x >> 5 ^ x >> 6 ^ x >> 7 ^ 99) & 255;
    }
    clean3(t);
    return box;
  })();
  var rotr32_8 = (n) => n << 24 | n >>> 8;
  var rotl32_8 = (n) => n << 8 | n >>> 24;
  function genTtable(sbox2, fn) {
    if (sbox2.length !== 256)
      throw new Error("Wrong sbox length");
    const T0 = new Uint32Array(256).map((_, j) => fn(sbox2[j]));
    const T1 = T0.map(rotl32_8);
    const T2 = T1.map(rotl32_8);
    const T3 = T2.map(rotl32_8);
    const T01 = new Uint32Array(256 * 256);
    const T23 = new Uint32Array(256 * 256);
    const sbox22 = new Uint16Array(256 * 256);
    for (let i = 0; i < 256; i++) {
      for (let j = 0; j < 256; j++) {
        const idx = i * 256 + j;
        T01[idx] = T0[i] ^ T1[j];
        T23[idx] = T2[i] ^ T3[j];
        sbox22[idx] = sbox2[i] << 8 | sbox2[j];
      }
    }
    return { sbox: sbox2, sbox2: sbox22, T0, T1, T2, T3, T01, T23 };
  }
  var tableEncoding = /* @__PURE__ */ genTtable(sbox, (s) => mul(s, 3) << 24 | s << 16 | s << 8 | mul(s, 2));
  var xPowers = /* @__PURE__ */ (() => {
    const p = new Uint8Array(16);
    for (let i = 0, x = 1; i < 16; i++, x = mul22(x))
      p[i] = x;
    return p;
  })();
  function expandKeyLE(key) {
    abytes2(key);
    const len = key.length;
    if (![16, 24, 32].includes(len))
      throw new Error("aes: invalid key size, should be 16, 24 or 32, got " + len);
    const { sbox2 } = tableEncoding;
    const toClean = [];
    if (!isAligned32(key))
      toClean.push(key = copyBytes(key));
    const k32 = u32(key);
    const Nk = k32.length;
    const subByte = (n) => applySbox(sbox2, n, n, n, n);
    const xk = new Uint32Array(len + 28);
    xk.set(k32);
    for (let i = Nk; i < xk.length; i++) {
      let t = xk[i - 1];
      if (i % Nk === 0)
        t = subByte(rotr32_8(t)) ^ xPowers[i / Nk - 1];
      else if (Nk > 6 && i % Nk === 4)
        t = subByte(t);
      xk[i] = xk[i - Nk] ^ t;
    }
    clean3(...toClean);
    return xk;
  }
  function apply0123(T01, T23, s0, s1, s2, s3) {
    return T01[s0 << 8 & 65280 | s1 >>> 8 & 255] ^ T23[s2 >>> 8 & 65280 | s3 >>> 24 & 255];
  }
  function applySbox(sbox2, s0, s1, s2, s3) {
    return sbox2[s0 & 255 | s1 & 65280] | sbox2[s2 >>> 16 & 255 | s3 >>> 16 & 65280] << 16;
  }
  function encrypt(xk, s0, s1, s2, s3) {
    const { sbox2, T01, T23 } = tableEncoding;
    let k = 0;
    s0 ^= xk[k++], s1 ^= xk[k++], s2 ^= xk[k++], s3 ^= xk[k++];
    const rounds = xk.length / 4 - 2;
    for (let i = 0; i < rounds; i++) {
      const t02 = xk[k++] ^ apply0123(T01, T23, s0, s1, s2, s3);
      const t12 = xk[k++] ^ apply0123(T01, T23, s1, s2, s3, s0);
      const t22 = xk[k++] ^ apply0123(T01, T23, s2, s3, s0, s1);
      const t32 = xk[k++] ^ apply0123(T01, T23, s3, s0, s1, s2);
      s0 = t02, s1 = t12, s2 = t22, s3 = t32;
    }
    const t0 = xk[k++] ^ applySbox(sbox2, s0, s1, s2, s3);
    const t1 = xk[k++] ^ applySbox(sbox2, s1, s2, s3, s0);
    const t2 = xk[k++] ^ applySbox(sbox2, s2, s3, s0, s1);
    const t3 = xk[k++] ^ applySbox(sbox2, s3, s0, s1, s2);
    return { s0: t0, s1: t1, s2: t2, s3: t3 };
  }
  function ctr32(xk, isLE2, nonce, src, dst) {
    abytes2(nonce, BLOCK_SIZE2);
    abytes2(src);
    dst = getOutput(src.length, dst);
    const ctr = nonce;
    const c32 = u32(ctr);
    const view = createView2(ctr);
    const src32 = u32(src);
    const dst32 = u32(dst);
    const ctrPos = isLE2 ? 0 : 12;
    const srcLen = src.length;
    let ctrNum = view.getUint32(ctrPos, isLE2);
    let { s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]);
    for (let i = 0; i + 4 <= src32.length; i += 4) {
      dst32[i + 0] = src32[i + 0] ^ s0;
      dst32[i + 1] = src32[i + 1] ^ s1;
      dst32[i + 2] = src32[i + 2] ^ s2;
      dst32[i + 3] = src32[i + 3] ^ s3;
      ctrNum = ctrNum + 1 >>> 0;
      view.setUint32(ctrPos, ctrNum, isLE2);
      ({ s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]));
    }
    const start = BLOCK_SIZE2 * Math.floor(src32.length / BLOCK_SIZE32);
    if (start < srcLen) {
      const b32 = new Uint32Array([s0, s1, s2, s3]);
      const buf = u8(b32);
      for (let i = start, pos = 0; i < srcLen; i++, pos++)
        dst[i] = src[i] ^ buf[pos];
      clean3(b32);
    }
    return dst;
  }
  function computeTag(fn, isLE2, key, data, AAD) {
    const aadLength = AAD ? AAD.length : 0;
    const h = fn.create(key, data.length + aadLength);
    if (AAD)
      h.update(AAD);
    const num = u64Lengths(8 * data.length, 8 * aadLength, isLE2);
    h.update(data);
    h.update(num);
    const res = h.digest();
    clean3(num);
    return res;
  }
  var gcm = /* @__PURE__ */ wrapCipher({ blockSize: 16, nonceLength: 12, tagLength: 16, varSizeNonce: true }, function aesgcm(key, nonce, AAD) {
    if (nonce.length < 8)
      throw new Error("aes/gcm: invalid nonce length");
    const tagLength = 16;
    function _computeTag(authKey, tagMask, data) {
      const tag = computeTag(ghash, false, authKey, data, AAD);
      for (let i = 0; i < tagMask.length; i++)
        tag[i] ^= tagMask[i];
      return tag;
    }
    function deriveKeys() {
      const xk = expandKeyLE(key);
      const authKey = EMPTY_BLOCK.slice();
      const counter = EMPTY_BLOCK.slice();
      ctr32(xk, false, counter, counter, authKey);
      if (nonce.length === 12) {
        counter.set(nonce);
      } else {
        const nonceLen = EMPTY_BLOCK.slice();
        const view = createView2(nonceLen);
        setBigUint642(view, 8, BigInt(nonce.length * 8), false);
        const g = ghash.create(authKey).update(nonce).update(nonceLen);
        g.digestInto(counter);
        g.destroy();
      }
      const tagMask = ctr32(xk, false, counter, EMPTY_BLOCK);
      return { xk, authKey, counter, tagMask };
    }
    return {
      encrypt(plaintext) {
        const { xk, authKey, counter, tagMask } = deriveKeys();
        const out = new Uint8Array(plaintext.length + tagLength);
        const toClean = [xk, authKey, counter, tagMask];
        if (!isAligned32(plaintext))
          toClean.push(plaintext = copyBytes(plaintext));
        ctr32(xk, false, counter, plaintext, out.subarray(0, plaintext.length));
        const tag = _computeTag(authKey, tagMask, out.subarray(0, out.length - tagLength));
        toClean.push(tag);
        out.set(tag, plaintext.length);
        clean3(...toClean);
        return out;
      },
      decrypt(ciphertext) {
        const { xk, authKey, counter, tagMask } = deriveKeys();
        const toClean = [xk, authKey, tagMask, counter];
        if (!isAligned32(ciphertext))
          toClean.push(ciphertext = copyBytes(ciphertext));
        const data = ciphertext.subarray(0, -tagLength);
        const passedTag = ciphertext.subarray(-tagLength);
        const tag = _computeTag(authKey, tagMask, data);
        toClean.push(tag);
        if (!equalBytes(tag, passedTag))
          throw new Error("aes/gcm: invalid ghash tag");
        const out = ctr32(xk, false, counter, data);
        clean3(...toClean);
        return out;
      }
    };
  });

  // server/crypto.js
  var utf8 = (s) => Uint8Array.from(unescape(encodeURIComponent(s)).split("").map((c) => c.charCodeAt(0)));
  var concat = (...arrays) => {
    const out = new Uint8Array(arrays.reduce((n, a) => n + a.length, 0));
    let p = 0;
    for (const a of arrays) {
      out.set(a, p);
      p += a.length;
    }
    return out;
  };
  function base64(b) {
    return Utilities.base64EncodeWebSafe(Array.from(b, (x) => x > 127 ? x - 256 : x)).replace(/=+$/, "");
  }
  function unbase64(s) {
    return Uint8Array.from(Utilities.base64DecodeWebSafe(s), (x) => x & 255);
  }
  var digest = (s) => base64(sha2562(utf8(s)));
  function randomBytes2(n = 32) {
    let bytes = new Uint8Array();
    while (bytes.length < n) bytes = concat(bytes, sha2562(utf8(Utilities.getUuid() + Utilities.getUuid() + Utilities.getUuid())));
    return bytes.slice(0, n);
  }
  function passwordHash(password, salt, pepper) {
    return base64(pbkdf2(sha2562, utf8(password + pepper), unbase64(salt), { c: 21e4, dkLen: 32 }));
  }
  function equals(a, b) {
    if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
    let x = 0;
    for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return x === 0;
  }
  function pushRequest(subscription, message, keys, now = Date.now(), entropy = randomBytes2) {
    const endpoint = subscription.endpoint;
    if (!/^https:\/\/(fcm\.googleapis\.com|updates\.push\.services\.mozilla\.com|updates\.push\.services\.mozilla\.org|web\.push\.apple\.com|[a-z0-9-]+\.push\.apple\.com)\//.test(endpoint)) throw new Error("Servidor de push n\xE3o permitido.");
    const client = unbase64(subscription.keys.p256dh), auth = unbase64(subscription.keys.auth);
    if (client.length !== 65 || auth.length !== 16) throw new Error("Assinatura push inv\xE1lida.");
    const ephemeral = entropy(32), server = p2562.getPublicKey(ephemeral, false), secret = p2562.getSharedSecret(ephemeral, client, false).slice(1, 33);
    const salt = entropy(16);
    const ikm = hkdf(sha2562, secret, auth, concat(utf8("WebPush: info\0"), client, server), 32);
    const key = hkdf(sha2562, ikm, salt, utf8("Content-Encoding: aes128gcm\0"), 16);
    const nonce = hkdf(sha2562, ikm, salt, utf8("Content-Encoding: nonce\0"), 12);
    const body = gcm(key, nonce).encrypt(concat(utf8(JSON.stringify(message)), Uint8Array.of(2)));
    const header = concat(salt, Uint8Array.of(0, 0, 16, 0, 65), server);
    const jwtHeader = base64(utf8(JSON.stringify({ typ: "JWT", alg: "ES256" })));
    const jwtBody = base64(utf8(JSON.stringify({ aud: endpoint.match(/^https:\/\/[^/]+/)[0], exp: Math.floor(now / 1e3) + 3600, sub: keys.subject })));
    const unsigned = jwtHeader + "." + jwtBody;
    const signature = base64(p2562.sign(sha2562(utf8(unsigned)), unbase64(keys.privateKey), { lowS: true }).toCompactRawBytes());
    return { url: endpoint, options: { method: "post", contentType: "application/octet-stream", payload: Array.from(concat(header, body), (x) => x > 127 ? x - 256 : x), headers: { Authorization: `vapid t=${unsigned}.${signature}, k=${keys.publicKey}`, "Content-Encoding": "aes128gcm", TTL: "3600", Urgency: "high" }, muteHttpExceptions: true, followRedirects: false } };
  }
  var publicKey = (privateKey) => base64(p2562.getPublicKey(unbase64(privateKey), false));

  // server/app.js
  var SHEET_ID = "1D47W_laV7iL7iGcmKaanOllZJalCiIgWj18Ucnd9Ic4";
  var props = () => PropertiesService.getScriptProperties();
  var iso = () => (/* @__PURE__ */ new Date()).toISOString();
  var openedDatabase;
  function db() {
    return openedDatabase || (openedDatabase = SpreadsheetApp.openById(props().getProperty("PLANILHA_ID") || SHEET_ID));
  }
  function tab(name) {
    const s = db().getSheetByName(name);
    if (!s) throw new Error("Execute instalarSistema no Apps Script antes de usar.");
    return s;
  }
  function ensure(name) {
    let s = db().getSheetByName(name);
    if (!s) {
      s = db().insertSheet(name);
      s.appendRow(["ID", "Atualizado em", "Dados JSON"]);
      s.setFrozenRows(1);
      s.getRange("A:C").setNumberFormat("@");
    }
    return s;
  }
  function all(name) {
    const s = tab(name);
    return s.getLastRow() < 2 ? [] : s.getRange(2, 1, s.getLastRow() - 1, 3).getValues().filter((r) => r[0]).map((r) => JSON.parse(r[2]));
  }
  function ensureRows(sheet, last) {
    const max = sheet.getMaxRows();
    if (last > max) sheet.insertRowsAfter(max, Math.max(500, last - max));
  }
  function put(name, obj) {
    const s = tab(name), rows = s.getLastRow() > 1 ? s.getRange(2, 1, s.getLastRow() - 1, 1).getValues() : [];
    const i = rows.findIndex((r) => r[0] === obj.id);
    const text = JSON.stringify(obj);
    requireThat(text.length < 45e3, "Registro muito grande. Reduza o texto ou a quantidade de c\xF3digos.");
    const row = i < 0 ? s.getLastRow() + 1 : i + 2;
    ensureRows(s, row);
    s.getRange(row, 1, 1, 3).setValues([[obj.id, iso(), text]]);
  }
  function append(name, objects) {
    if (!objects.length) return;
    const sheet = tab(name);
    const rows = objects.map((obj) => {
      const text = JSON.stringify(obj);
      requireThat(text.length < 45e3, "Registro muito grande.");
      return [obj.id, iso(), text];
    });
    ensureRows(sheet, sheet.getLastRow() + rows.length);
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, 3).setValues(rows);
  }
  function remove(name, id) {
    const s = tab(name);
    if (s.getLastRow() < 2) return;
    const rows = s.getRange(2, 1, s.getLastRow() - 1, 1).getValues();
    const i = rows.findIndex((r) => r[0] === id);
    if (i >= 0) s.deleteRow(i + 2);
  }
  function locked(fn) {
    const lock = LockService.getScriptLock();
    requireThat(lock.tryLock(15e3), "Sistema ocupado. Tente novamente em alguns segundos.");
    try {
      return fn();
    } finally {
      lock.releaseLock();
    }
  }
  function patientTab(date) {
    requireThat(/^\d{4}-\d{2}-\d{2}$/.test(date), "Data inv\xE1lida.");
    return "Atendimentos_" + date.slice(0, 7).replace("-", "_");
  }
  function patients(date) {
    const name = patientTab(date);
    return db().getSheetByName(name) ? all(name).filter((p) => p.date === date) : [];
  }
  function staff() {
    return sortStaff(all("Profissionais"));
  }
  function user(id) {
    return staff().find((u) => u.id === id);
  }
  function canSee(u, p) {
    return manager(u) || !clinical(u) || u.id === p.professionalId;
  }
  function reception(u) {
    return u.role === "reception";
  }
  function manager(u) {
    return u.role === "manager";
  }
  function own(u, p) {
    requireThat(clinical(u) && u.id === p.professionalId, "Somente o profissional respons\xE1vel pode alterar o atendimento.");
  }
  function audit(u, action, target, details = {}) {
    append("Auditoria", [{ id: Utilities.getUuid(), at: iso(), actor: (u == null ? void 0 : u.id) || "sistema", action, target, ...details }]);
  }
  function credential(id) {
    const raw = props().getProperty("AUTH_" + id);
    return raw ? JSON.parse(raw) : null;
  }
  function setPassword(id, password) {
    requireThat(typeof password === "string" && password.length >= 6 && password.length <= 128, "A senha deve ter entre 6 e 128 caracteres.");
    const salt = base64(randomBytes2(16));
    props().setProperty("AUTH_" + id, JSON.stringify({ salt, hash: passwordHash(password, salt, props().getProperty("PEPPER")) }));
  }
  function checkPassword(id, password) {
    const c = credential(id);
    return c && equals(c.hash, passwordHash(String(password || ""), c.salt, props().getProperty("PEPPER")));
  }
  function rate(id) {
    const cache = CacheService.getScriptCache(), key = "login_" + digest(id);
    const n = Number(cache.get(key) || 0);
    requireThat(n < 8, "Muitas tentativas. Aguarde 15 minutos.");
    cache.put(key, String(n + 1), 900);
    return () => cache.remove(key);
  }
  function startSession(u) {
    const token = base64(randomBytes2());
    append("Sessoes", [{ id: digest(token), userId: u.id, expires: Date.now() + 12 * 36e5 }]);
    return { token, user: u };
  }
  function authenticated(token) {
    requireThat(typeof token === "string" && token.length >= 40 && token.length <= 100, "Entre novamente no seu perfil.");
    const s = all("Sessoes").find((x) => x.id === digest(token));
    requireThat(s && s.expires > Date.now(), "Sess\xE3o expirada. Entre novamente.");
    const u = user(s.userId);
    requireThat(u, "Perfil n\xE3o encontrado.");
    return u;
  }
  function cancelSessions(id) {
    for (const s of all("Sessoes").filter((x) => x.userId === id)) remove("Sessoes", s.id);
    for (const s of all("Push").filter((x) => x.userId === id)) remove("Push", s.id);
  }
  function queue(userId, title, body, patientId, key) {
    if (key && all("Notificacoes").some((n) => n.id === key)) return;
    append("Notificacoes", [{ id: key || Utilities.getUuid(), userId, title, body, patientId, createdAt: iso(), attempts: 0, nextTry: Date.now(), state: "pending" }]);
  }
  function viewPatient(u, p) {
    if (reception(u)) {
      const { productivity, startedAt, endedAt, ...rest } = p;
      return { ...rest, attending: Boolean(startedAt && !endedAt), attended: Boolean(endedAt) };
    }
    return p;
  }
  function stock(u, moves = all("EstoqueMovimentos"), orders) {
    const items = canSeeMaterials(u) ? [...BLOCKS, ...almox_default] : BLOCKS;
    const totals = /* @__PURE__ */ new Map();
    for (const m of moves) totals.set(m.blockId, (totals.get(m.blockId) || 0) + m.delta);
    return items.map((b) => {
      const i = b.category === "materials" ? almox_default.indexOf(b) : -1;
      let n = b.initial || 0, known = i < 0 || b.initial != null || totals.has(b.id);
      if (i >= 0) {
        orders != null ? orders : orders = storedOrders();
        for (const o of orders) if (o.status === "received") {
          n += o.adjustments[i];
          if (o.imported[i] != null) known = true;
        }
      }
      return { ...b, quantity: known ? n + (totals.get(b.id) || 0) : null };
    });
  }
  var orderTab = "PedidosEnfermagem";
  function storedOrders() {
    return db().getSheetByName(orderTab) ? all(orderTab) : [];
  }
  function nextWednesday(day) {
    const date = /* @__PURE__ */ new Date(day + "T00:00:00Z");
    date.setUTCDate(date.getUTCDate() + ((3 - date.getUTCDay() + 7) % 7 || 7));
    return date.toISOString().slice(0, 10);
  }
  function nextCycle(day) {
    return new Date(Date.parse(day) + 14 * 864e5).toISOString().slice(0, 10);
  }
  function orderView(u, id) {
    var _a, _b;
    requireThat(canSeeMaterials(u), "Sem acesso aos materiais.");
    const history = storedOrders().sort((a, b) => a.id.localeCompare(b.id));
    const closed = history.filter((o) => o.status !== "open");
    const latest = closed.at(-1);
    const current = latest ? nextCycle(latest.id) : "2026-12-02";
    const target = id || current;
    const order = history.find((o) => o.id === target) || { id: target, status: "open", revision: 0, requested: {} };
    requireThat(history.some((o) => o.id === target) || target === current, "Pedido desconhecido.");
    const moves = all("EstoqueMovimentos");
    const from = ((_a = closed.filter((o) => o.id < target).at(-1)) == null ? void 0 : _a.cutoff) || 0;
    const usage = {};
    for (const m of moves.slice(from)) if (["take", "correct"].includes(m.kind)) usage[m.blockId] = (usage[m.blockId] || 0) - m.delta;
    (_b = order.orderDate) != null ? _b : order.orderDate = order.status === "open" && !order.revision ? nextWednesday(localDate()) : order.id;
    const items = stock(u, moves, history).filter((x) => x.category === "materials");
    return { order, items, current, latest: latest == null ? void 0 : latest.id, history: closed.map((o) => ({ id: o.id, status: o.status, orderDate: o.orderDate || o.id })), balances: order.balances || items.map((i) => i.quantity), usage: order.usage || items.map((i) => usage[i.id] || 0), cutoff: moves.length };
  }
  function orderAction(u, input) {
    const view = orderView(u, input.orderId), o = view.order;
    if (input.operation === "view") return view;
    requireThat(orderManager(u), "Somente os quatro respons\xE1veis podem alterar pedidos.");
    requireThat(o.revision === input.revision, "O pedido mudou. Abra novamente para conferir.");
    const integer = (n) => Number.isSafeInteger(n) && n >= 0;
    if (input.operation === "draft" || input.operation === "close") {
      requireThat(o.status === "open" && o.id === view.current, "Pedido encerrado.");
      if (input.orderDate !== void 0) {
        const d = input.orderDate;
        requireThat(typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d) && Number.isFinite(Date.parse(d)) && new Date(d).toISOString().slice(0, 10) === d, "Data do pedido inv\xE1lida.");
        o.orderDate = d;
      }
      for (const [id, n] of Object.entries(input.requested || {})) {
        requireThat(almox_default.some((i) => i.id === id) && integer(n), "Quantidade solicitada inv\xE1lida.");
        o.requested[id] = n;
      }
      if (input.operation === "close") {
        o.status = "closed";
        o.balances = view.balances;
        o.usage = view.usage;
        o.cutoff = view.cutoff;
      }
    } else if (input.operation === "undo") {
      requireThat(o.status === "closed" && o.id === view.latest, "S\xF3 o \xFAltimo pedido fechado sem recebimento pode ser reaberto.");
      o.status = "open";
      delete o.balances;
      delete o.usage;
      delete o.cutoff;
    } else if (input.operation === "receive") {
      requireThat(["received", "closed"].includes(o.status), "Feche o pedido antes do recebimento.");
      const rows = input.rows;
      requireThat(Array.isArray(rows) && rows.length === almox_default.length, "Planilha incompleta.");
      const adjustments = rows.map(([base, received], i) => {
        var _a;
        requireThat((base === null || integer(base)) && integer(received), "Saldo ou quantidade atendida inv\xE1lidos.");
        requireThat(o.status !== "received" || base === o.imported[i], "Ap\xF3s receber, corrija apenas a quantidade atendida.");
        requireThat(base !== null || received === 0, "Informe o saldo num\xE9rico do item recebido.");
        const delta = base === null ? 0 : base + received - (o.balances[i] || 0);
        requireThat((view.items[i].quantity || 0) + delta - (((_a = o.adjustments) == null ? void 0 : _a[i]) || 0) >= 0, "A corre\xE7\xE3o deixaria saldo negativo: " + almox_default[i].name);
        return delta;
      });
      o.imported = rows.map((r) => r[0]);
      o.received = rows.map((r) => r[1]);
      o.adjustments = adjustments;
      o.status = "received";
    } else throw new Error("Opera\xE7\xE3o desconhecida.");
    o.revision++;
    o.updatedBy = u.id;
    ensure(orderTab);
    put(orderTab, o);
    return { ok: true };
  }
  function overdue(date) {
    for (const p of patients(date)) {
      if (p.status === "scheduled" && !p.arrivedAt && isLate(p)) {
        p.status = "late_absent";
        p.markedAt = iso();
        p.version++;
        p.autoVersion = p.version;
        put(patientTab(date), p);
        audit(null, "falta_automatica", p.id);
      }
    }
  }
  function dashboard(u, date) {
    const moves = all("EstoqueMovimentos");
    overdue(localDate());
    const list = patients(date).filter((p) => canSee(u, p)).map((p) => viewPatient(u, p));
    const notices = all("Notificacoes").filter((n) => n.userId === u.id).slice(-30).reverse();
    return { supportsPatientEdit: true, supportsAttendanceOnProductivity: true, supportsPaperFields: true, supportsDailyCare: true, supportsQueue: true, patients: list, staff: staff().filter((x) => x.role !== "reception"), stock: stock(u, moves), movements: moves.filter((m) => m.blockId !== "sonda-vesical" && (manager(u) || m.userId === u.id) && (canSeeMaterials(u) || !almox_default.some((b) => b.id === m.blockId))).slice(-100).reverse(), notifications: notices, serverTime: iso(), pushPublicKey: props().getProperty("VAPID_PUBLIC"), user: u };
  }
  function createPatients(u, input) {
    requireThat(reception(u) || manager(u) || clinical(u), "Seu perfil \xE9 somente leitura.");
    const list = (input.patients || [input.patient]).map(patientInput);
    requireThat(list.length && list.length <= 100, "Importe at\xE9 100 pacientes por vez.");
    const people = staff();
    for (const p of list) {
      requireThat(people.some((x) => x.id === p.professionalId && clinical(x)), "Escolha um profissional de atendimento.");
      if (clinical(u) && !manager(u)) requireThat(p.professionalId === u.id, "Importe apenas a sua agenda.");
    }
    const date = list[0].date;
    requireThat(list.every((p) => p.date === date && p.professionalId === list[0].professionalId), "Use uma \xFAnica data e profissional por lista.");
    const key = requestKey(u, input), existing = patients(date), previous = existing.filter((p) => p.batchKey === key);
    if (previous.length) return { added: previous.length, duplicates: [], patients: previous.map((p) => viewPatient(u, p)) };
    validateBatchNumbers(list, existing);
    const rows = list.map((p, index) => ({ ...p, id: key + "-" + index, batchKey: key, createdAt: iso(), createdBy: u.id, status: isLate(p) ? "late_absent" : "scheduled", markedAt: isLate(p) ? iso() : null, arrivedAt: null, completion: null, version: 1, productivity: {} }));
    const name = patientTab(date);
    ensure(name);
    append(name, rows);
    audit(u, "incluir_pacientes", date, { patients: rows.map((p) => p.id) });
    return { added: rows.length, duplicates: [], patients: rows.map((p) => viewPatient(u, p)) };
  }
  function requestKey(u, input) {
    return digest(u.id + "|" + input.action + "|" + (input.requestId || Utilities.getUuid()));
  }
  function assignNumbers(u, input) {
    requireThat(!reception(u), "Sem acesso \xE0 produtividade.");
    const rows = patients(input.date), changes = input.assignments;
    requireThat(Array.isArray(changes) && changes.length > 0 && changes.length <= 500, "Sele\xE7\xE3o inv\xE1lida.");
    const updates = changes.map((c) => {
      const p = rows.find((p2) => p2.id === c.id);
      requireThat(p && canSee(u, p) && paperNumberValue(c.paperNumber), "N\xFAmero ou paciente inv\xE1lido.");
      requireThat(!p.paperNumber || p.paperNumber === Number(c.paperNumber), "O paciente j\xE1 recebeu outro n\xFAmero.");
      return { ...p, paperNumber: Number(c.paperNumber) };
    });
    const ids = new Set(updates.map((p) => p.id));
    requireThat(ids.size === updates.length, "Paciente repetido.");
    validateBatchNumbers(updates, rows.filter((p) => !ids.has(p.id)));
    for (const p of updates) {
      if (!rows.find((x) => x.id === p.id).paperNumber) {
        p.version++;
        put(patientTab(input.date), p);
        audit(u, "numero_do_papel", p.id);
      }
    }
    return { patients: updates };
  }
  function recoverPatientMove() {
    const raw = props().getProperty("PATIENT_MOVE");
    if (!raw) return;
    const { source, date, id, key } = JSON.parse(raw);
    if (patients(date).some((p) => {
      var _a;
      return p.id === id && ((_a = p.applied) == null ? void 0 : _a.includes(key));
    })) {
      remove(source, id);
      SpreadsheetApp.flush();
    }
    props().deleteProperty("PATIENT_MOVE");
  }
  function editPatient(u, input) {
    const fields = patientInput(input.patient);
    const source = patientTab(input.date), target = patientTab(fields.date);
    const key = requestKey(u, input);
    const destination = patients(fields.date);
    const result = (p) => canSee(u, p) ? viewPatient(u, p) : { id: p.id, transferred: true };
    const saved = destination.find((p) => {
      var _a;
      return p.id === input.id && ((_a = p.applied) == null ? void 0 : _a.includes(key));
    });
    if (saved) return result(saved);
    const current = (fields.date === input.date ? destination : patients(input.date)).find((p) => p.id === input.id);
    requireThat(current, "Atendimento n\xE3o encontrado na agenda de origem.");
    requireThat(reception(u) || manager(u) || clinical(u) && current.professionalId === u.id, "Sem permiss\xE3o para editar esta agenda.");
    requireThat(current.version === input.version, "O registro mudou em outro dispositivo. Atualize a lista e tente novamente.");
    requireThat(staff().some((p) => p.id === fields.professionalId && clinical(p)), "Escolha um profissional de atendimento.");
    const others = destination.filter((p) => p.id !== current.id);
    validateBatchNumbers([fields], others);
    if (current.startedAt && !current.endedAt) requireThat(!others.some((p) => p.professionalId === fields.professionalId && p.startedAt && !p.endedAt), "O profissional j\xE1 tem um atendimento em andamento nesta data.");
    const updated = { ...current, ...fields, version: current.version + 1, applied: [...(current.applied || []).slice(-63), key] };
    if (source === target) put(source, updated);
    else {
      ensure(target);
      props().setProperty("PATIENT_MOVE", JSON.stringify({ source, date: fields.date, id: updated.id, key }));
      put(target, updated);
      SpreadsheetApp.flush();
      remove(source, updated.id);
      SpreadsheetApp.flush();
      props().deleteProperty("PATIENT_MOVE");
    }
    audit(u, "editar_dados", updated.id);
    return result(updated);
  }
  function mutatePatient(u, input) {
    const name = patientTab(input.date), p = patients(input.date).find((x) => x.id === input.id);
    requireThat(p, "Paciente n\xE3o encontrado.");
    const key = requestKey(u, input);
    if ((p.applied || []).includes(key)) {
      requireThat(canSee(u, p), "Sem permiss\xE3o.");
      return viewPatient(u, p);
    }
    const autoLate = ["arrive", "productivity"].includes(input.operation) && p.status === "late_absent" && !p.arrivedAt && !p.lateDecision && p.autoVersion === p.version && p.version === input.version + 1;
    requireThat(p.version === input.version || autoLate, "O registro mudou em outro dispositivo. Atualize a lista e tente novamente.");
    const action = input.operation;
    if (["arrive", "absent", "undo", "ask"].includes(action)) requireThat(reception(u), "Somente a recep\xE7\xE3o pode registrar ou corrigir a presen\xE7a.");
    else own(u, p);
    const at = input.occurredAt == null ? Date.now() : Number(input.occurredAt);
    requireThat(Number.isFinite(at) && at > 0 && at <= Date.now() + 3e5, "Hor\xE1rio do dispositivo inv\xE1lido.");
    if (action === "productivity") recordProductivity(p, input.productivity, at);
    else {
      if (action === "start") requireThat(!patients(input.date).some((x) => x.professionalId === u.id && x.startedAt && !x.endedAt), "Finalize o atendimento atual antes de iniciar outro.");
      transition(p, action, at);
      if (action === "finish" && input.productivity) p.productivity = validProductivity(input.productivity);
    }
    p.version++;
    p.applied = [...(p.applied || []).slice(-63), key];
    if (action === "arrive") {
      queue(p.professionalId, p.name, `Seu paciente das ${p.time} chegou!`, p.id, key);
      try {
        flushPush(p.id, true);
      } catch (err) {
      }
    }
    if (action === "undo") queue(p.professionalId, "Marca\xE7\xE3o corrigida pela recep\xE7\xE3o", `${p.name}, ${p.time}: confira a situa\xE7\xE3o atual na agenda.`, p.id);
    if (action === "ask") queue(p.professionalId, p.name, `Seu paciente das ${p.time} chegou atrasado. Deseja atend\xEA-lo?`, p.id);
    if (["accept", "reject"].includes(action)) queue("recepcao", action === "accept" ? "Atendimento autorizado" : "Falta por atraso", `${p.name}, ${p.time}: ${action === "accept" ? "o profissional aceitou o atendimento." : "o profissional recusou o atendimento."}`, p.id);
    put(name, p);
    audit(u, action, p.id);
    return viewPatient(u, p);
  }
  function inventory(u, input) {
    requireThat(manager(u) || clinical(u), "Sem permiss\xE3o para alterar estoque.");
    const material = almox_default.some((b) => b.id === input.blockId);
    requireThat(material ? canSeeMaterials(u) : BLOCKS.some((b) => b.id === input.blockId), "Item inv\xE1lido.");
    const key = requestKey(u, input);
    const previous = all("EstoqueMovimentos").find((m) => m.id === key);
    if (previous) return input.occurredAt ? { stock: stock(u), movement: previous } : stock(u);
    let delta;
    if (input.operation === "restock") {
      requireThat(material && manager(u), "Somente a ger\xEAncia pode repor materiais.");
      delta = Number(input.quantity);
      requireThat(Number.isInteger(delta) && delta > 0 && delta <= 1e5, "Quantidade inv\xE1lida.");
    } else if (input.operation === "set") {
      requireThat(manager(u), "Somente a ger\xEAncia ajusta o saldo.");
      const n = Number(input.quantity);
      requireThat(Number.isInteger(n) && n >= 0 && n <= 1e5, "Quantidade inv\xE1lida.");
      delta = n - stock(u).find((b) => b.id === input.blockId).quantity;
    } else if (input.operation === "take") {
      requireThat(material ? nursing(u) : clinical(u), "Retiradas s\xE3o registradas pelo pr\xF3prio profissional.");
      const n = Number(input.quantity);
      requireThat(Number.isInteger(n) && n > 0 && n <= 1e3, "Informe uma quantidade inteira positiva.");
      delta = -n;
    } else if (input.operation === "correct") {
      const m = all("EstoqueMovimentos").find((x) => x.id === input.movementId);
      requireThat(m && m.userId === u.id && m.kind === "take" && m.blockId === input.blockId, "Retirada n\xE3o encontrada.");
      requireThat(!all("EstoqueMovimentos").some((x) => x.corrects === m.id), "Esta retirada j\xE1 foi corrigida.");
      const n = Number(input.quantity);
      requireThat(Number.isInteger(n) && n >= 0 && n <= 1e3, "Quantidade inv\xE1lida.");
      delta = -n - m.delta;
    } else throw new Error("Opera\xE7\xE3o inv\xE1lida.");
    requireThat(stock(u).find((b) => b.id === input.blockId).quantity + delta >= 0, "Estoque insuficiente.");
    const movement = { id: key, clientRequest: input.requestId || null, blockId: input.blockId, userId: u.id, userName: u.name, delta, at: iso(), kind: input.operation, corrects: input.operation === "correct" ? input.movementId : null, quantity: Number(input.quantity) };
    append("EstoqueMovimentos", [movement]);
    audit(u, "estoque", movement.id);
    return input.occurredAt ? { stock: stock(u), movement } : stock(u);
  }
  function handle(input) {
    requireThat(input && typeof input.action === "string", "Requisi\xE7\xE3o inv\xE1lida.");
    requireThat(props().getProperty("INSTALLED") === "1", "O Apps Script ainda precisa ser instalado. Execute instalarSistema.");
    recoverPatientMove();
    if (!props().getProperty("EQUIPE_2100")) {
      const existing = staff();
      for (const person of STAFF) {
        const old = existing.find((x) => x.id === person.id);
        if (!old || old.name !== person.name || old.title !== person.title || old.clinicalRole !== person.clinicalRole) put("Profissionais", { ...old, ...person });
      }
      props().setProperty("EQUIPE_2100", "1");
    }
    if (input.action === "profiles") return { staff: staff().filter((u2) => !reception(u2)).map((u2) => ({ ...u2, hasPassword: Boolean(credential(u2.id)) })), ready: true };
    if (input.action === "login") {
      const reset = rate(input.id);
      requireThat(checkPassword(input.id, input.password), "Senha incorreta.");
      const u2 = user(input.id);
      requireThat(u2, "Perfil inv\xE1lido.");
      reset();
      return { ...startSession(u2), ...input.withDashboard ? { dashboard: dashboard(u2, input.date || localDate()) } : {} };
    }
    if (input.action === "firstPassword") {
      const u2 = user(input.id);
      requireThat(u2 && !reception(u2), "Perfil inv\xE1lido.");
      requireThat(!credential(u2.id), "Este perfil j\xE1 tem senha.");
      rate(u2.id);
      setPassword(u2.id, input.password);
      audit(u2, "primeiro_acesso", u2.id);
      return { ...startSession(u2), ...input.withDashboard ? { dashboard: dashboard(u2, input.date || localDate()) } : {} };
    }
    const u = authenticated(input.token);
    if (input.action === "logout") {
      remove("Sessoes", digest(input.token));
      if (input.endpoint) {
        const id = digest(input.endpoint);
        const sub = all("Push").find((x) => x.id === id);
        if ((sub == null ? void 0 : sub.userId) === u.id) remove("Push", id);
      }
      return { ok: true };
    }
    if (input.action === "dashboard") return dashboard(u, input.date || localDate());
    if (input.action === "addPatients") return createPatients(u, input);
    if (input.action === "assignPaperNumbers") return assignNumbers(u, input);
    if (input.action === "editPatient") return editPatient(u, input);
    if (input.action === "patient") return mutatePatient(u, input);
    if (input.action === "supplyOrder") return orderAction(u, input);
    if (input.action === "inventory") return inventory(u, input);
    if (input.action === "changePassword") {
      const reset = rate(u.id);
      requireThat(checkPassword(u.id, input.oldPassword), "Senha atual incorreta.");
      setPassword(u.id, input.password);
      cancelSessions(u.id);
      reset();
      audit(u, "alterar_senha", u.id);
      return startSession(u);
    }
    if (input.action === "resetPassword") {
      requireThat(manager(u), "Somente a ger\xEAncia pode redefinir senhas.");
      const target = user(input.id);
      requireThat(target && target.id !== u.id && !manager(target) && !reception(target), "A recupera\xE7\xE3o de gerentes e da recep\xE7\xE3o \xE9 feita pelo respons\xE1vel pelo Apps Script.");
      setPassword(target.id, input.password);
      cancelSessions(target.id);
      audit(u, "redefinir_senha", target.id);
      return { ok: true };
    }
    if (input.action === "addStaff") {
      requireThat(manager(u), "Somente a ger\xEAncia pode cadastrar profissionais.");
      const reset = rate("cadastro");
      requireThat(checkPassword("cadastro", input.registrationPassword), "Senha de cadastro incorreta.");
      requireThat(Object.keys(ROLES).includes(input.role) && input.role !== "reception", "Perfil inv\xE1lido.");
      const name = String(input.name || "").trim(), title = String(input.title || ROLES[input.role]).trim();
      requireThat(name.length >= 2 && name.length <= 100 && title.length <= 100, "Confira o nome e a identifica\xE7\xE3o.");
      const person = { id: Utilities.getUuid(), name, title, role: input.role };
      put("Profissionais", person);
      audit(u, "cadastrar_profissional", person.id);
      reset();
      return person;
    }
    if (input.action === "subscribe") {
      requireThat(input.subscription && JSON.stringify(input.subscription).length < 3e3, "Assinatura inv\xE1lida.");
      const sub = input.subscription;
      pushRequest(sub, { title: "Teste", body: "Valida\xE7\xE3o" }, { privateKey: props().getProperty("VAPID_PRIVATE"), publicKey: props().getProperty("VAPID_PUBLIC"), subject: "https://hanslbauer.github.io/gerenciamento/" });
      put("Push", { id: digest(sub.endpoint), userId: u.id, subscription: sub, at: iso() });
      return { ok: true };
    }
    if (input.action === "testPush") {
      queue(u.id, "Notifica\xE7\xF5es ativadas", "Este \xE9 um teste de push da USF Nova Veneza. Abra o app para consultar sua agenda.", null);
      return { ok: true };
    }
    throw new Error("Opera\xE7\xE3o desconhecida.");
  }
  function apiPost(e) {
    var _a;
    try {
      const raw = ((_a = e == null ? void 0 : e.postData) == null ? void 0 : _a.contents) || "";
      requireThat(raw.length <= 25e4, "Requisi\xE7\xE3o muito grande.");
      const input = JSON.parse(raw);
      const output = locked(() => handle(input));
      if (input.action === "patient" && ["ask", "undo", "accept", "reject"].includes(input.operation) || input.action === "testPush") {
        try {
          flushPush(input.id || null);
        } catch (err) {
        }
      }
      return json({ ok: true, data: output });
    } catch (error) {
      return json({ ok: false, error: String(error.message || "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.") });
    }
  }
  function apiGet() {
    return json({ app: "USF Nova Veneza", version: "2.12.0", ready: props().getProperty("INSTALLED") === "1" });
  }
  function json(data) {
    return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
  }
  function install() {
    locked(() => {
      const pr = props();
      if (pr.getProperty("INSTALLED") === "1") {
        Logger.log("Sistema j\xE1 instalado. Nenhum dado foi apagado.");
        return;
      }
      const receptionPassword = pr.getProperty("RECEPCAO_SENHA"), registrationPassword = pr.getProperty("CADASTRO_SENHA");
      requireThat(receptionPassword && registrationPassword, "Defina RECEPCAO_SENHA e CADASTRO_SENHA nas Propriedades do script.");
      db();
      for (const name of ["Profissionais", "Sessoes", "EstoqueMovimentos", "Auditoria", "Push", "Notificacoes"]) ensure(name);
      ensure(patientTab(localDate()));
      pr.setProperty("PEPPER", base64(randomBytes2()));
      for (const person of STAFF) put("Profissionais", person);
      put("Profissionais", { id: "recepcao", name: "Recep\xE7\xE3o", title: "Recep\xE7\xE3o", role: "reception" });
      setPassword("recepcao", receptionPassword);
      setPassword("cadastro", registrationPassword);
      const key = base64(randomBytes2());
      pr.setProperties({ VAPID_PRIVATE: key, VAPID_PUBLIC: publicKey(key) });
      if (!ScriptApp.getProjectTriggers().some((t) => t.getHandlerFunction() === "rotinaAutomatica")) ScriptApp.newTrigger("rotinaAutomatica").timeBased().everyMinutes(1).create();
      pr.setProperty("INSTALLED", "1");
      pr.deleteProperty("RECEPCAO_SENHA");
      pr.deleteProperty("CADASTRO_SENHA");
      Logger.log("Sistema instalado. Publique uma nova vers\xE3o como App da Web.");
    });
  }
  function recover() {
    locked(() => {
      const p = props(), id = p.getProperty("RECUPERAR_PERFIL"), password = p.getProperty("RECUPERAR_SENHA");
      requireThat(id && password && user(id), "Defina RECUPERAR_PERFIL (ex.: heuller) e RECUPERAR_SENHA nas Propriedades do script.");
      setPassword(id, password);
      cancelSessions(id);
      p.deleteProperty("RECUPERAR_PERFIL");
      p.deleteProperty("RECUPERAR_SENHA");
      audit(null, "recuperacao_administrativa", id);
    });
  }
  function cron() {
    if (props().getProperty("INSTALLED") !== "1") return;
    locked(() => {
      recoverPatientMove();
      overdue(localDate());
      for (const s of all("Sessoes").filter((s2) => s2.expires < Date.now())) remove("Sessoes", s.id);
      const cutoff = Date.now() - 7 * 864e5;
      for (const n of all("Notificacoes").filter((n2) => Date.parse(n2.createdAt) < cutoff)) remove("Notificacoes", n.id);
    });
    flushPush();
  }
  function flushPush(patientId, hasLock = false) {
    const run = hasLock ? (fn) => fn() : locked;
    const batch = run(() => {
      const list = all("Notificacoes").filter((n) => (!patientId || n.patientId === patientId) && (n.state === "pending" || n.state === "sending" && n.nextTry < Date.now()) && n.nextTry <= Date.now() && n.attempts < 4).slice(0, 10);
      for (const n of list) {
        n.state = "sending";
        n.attempts++;
        n.nextTry = Date.now() + 12e4;
        put("Notificacoes", n);
      }
      return list;
    });
    for (const n of batch) {
      let retry = false;
      const subscriptions = run(() => all("Push").filter((s) => s.userId === n.userId));
      for (const sub of subscriptions) {
        if ((n.delivered || []).includes(sub.id)) continue;
        try {
          const request = pushRequest(sub.subscription, { title: n.title, body: n.body, tag: n.id, url: "https://hanslbauer.github.io/gerenciamento/" }, { privateKey: props().getProperty("VAPID_PRIVATE"), publicKey: props().getProperty("VAPID_PUBLIC"), subject: "https://hanslbauer.github.io/gerenciamento/" });
          const response = UrlFetchApp.fetch(request.url, request.options), code = response.getResponseCode();
          if (code === 404 || code === 410) run(() => remove("Push", sub.id));
          else if (code >= 200 && code < 300) {
            n.delivered = [...n.delivered || [], sub.id];
          } else {
            retry = true;
            n.lastError = "HTTP " + code;
          }
        } catch (error) {
          retry = true;
          n.lastError = String(error.message).slice(0, 120);
        }
      }
      n.state = retry && n.attempts < 4 ? "pending" : retry ? "failed" : subscriptions.length ? "sent" : "no_device";
      n.nextTry = Date.now() + 6e4 * Math.pow(2, n.attempts);
      run(() => put("Notificacoes", n));
    }
  }
  return __toCommonJS(app_exports);
})();
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/utils.js:
@noble/curves/esm/abstract/modular.js:
@noble/curves/esm/abstract/curve.js:
@noble/curves/esm/abstract/weierstrass.js:
@noble/curves/esm/_shortw_utils.js:
@noble/curves/esm/nist.js:
@noble/curves/esm/p256.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/ciphers/esm/utils.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/

function doGet(e){return UBS.apiGet(e);}
function doPost(e){return UBS.apiPost(e);}
function instalarSistema(){return UBS.install();}
function rotinaAutomatica(){return UBS.cron();}
function recuperarAcesso(){return UBS.recover();}
