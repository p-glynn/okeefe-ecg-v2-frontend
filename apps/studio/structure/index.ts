import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Question Types')
    .items([
      S.listItem().title('ECG').child(S.documentTypeList('ecg').apiVersion('2024-10-01').title('ECG')),
      S.listItem()
        .title('Angiogram')
        .child(S.documentTypeList('angiogram').apiVersion('2024-10-01').title('Angiogram')),
      S.listItem().title('ECHO').child(S.documentTypeList('echo').apiVersion('2024-10-01').title('ECHO')),
      S.listItem().title('QBank').child(S.documentTypeList('qbank').apiVersion('2024-10-01').title('QBank')),
    ]);
