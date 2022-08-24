import create from 'zustand'

const useStore = create((set) => ({
  sequenceIds: [],
  sectionable: false,
  blockable: true,
  editable: true,
  preview: false,
  verbose: false,
  footNoteSelected: false,

  setSectionable: (sectionable) => set({ sectionable: sectionable }),
  setBlockable: (blockable) => set({ blockable: blockable }),
  setEditable: (editable) => set({ editable: editable }),
  setPreview: (preview) => set({ preview: preview }),
  addSequenceId: (_sequenceId) => set((state) => ({ sequenceIds: [...state.sequenceIds, _sequenceId] })),
  setSequenceIds: (sequenceIds) => set({ sequenceIds: sequenceIds }),
  setFootNoteSelected: (footNoteSelected) => set({ footNoteSelected: footNoteSelected }),
  setSectionable: (sectionable) => set({ sectionable: sectionable }),

}))

export default useStore;