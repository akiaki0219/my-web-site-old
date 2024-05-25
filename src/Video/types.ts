export type fetchVideoObject = {
  id: number,
  type: {
    name: string
  }[],
  title: string,
  YouTube: string,
  niconico: string,
  number: number,
  posted_at: Date,
  used: {
    character: {
      name: string
    }[]
  }[],
};

export type VideoObject = {
  id: number,
  type: {
    name: string
  },
  title: string,
  YouTube: string,
  niconico: string,
  number: number,
  posted_at: Date,
  used: {
    character: {
      name: string
    }
  }[],
};
