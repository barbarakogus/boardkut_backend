const { SUPABASE } = require('./db');

module.exports = {
  getAllBoardgames: async () => {
    const res = await SUPABASE.from('boardgames').select();
    return { boardgames: res.data, error: res.error?.message };
  },
  getBoardgameById: async (id) => {
    const res = await SUPABASE.from('boardgames').select().eq('id', id);
    if (!res) return null;
    if (res.length == 0) {
      return null;
    }
    return res.data[0];
  },
  addBoardgame: async (data) => {
    const res = await SUPABASE.from('boardgames').insert({ title: data.title, type: data.type, players: data.players, play_time: data.playTime, play_time_unit: data.playTimeUnit, language: data.language, purchase_date: data.purchaseDate }).select()
    if (!res || res.length === 0) {
      return null
    } else {
      return res.data[0];
    }
  },
  updateBoardgame: async (data, id) => {
    const res = await SUPABASE.from('boardgames').update({ title: data.title, type: data.type, players: data.players, play_time: data.playTime, play_time_unit: data.playTimeUnit, language: data.language, age: data.age, purchase_date: data.purchaseDate }).eq('id', id)
    return res.data;
  },
  deleteBoardgame: async (id) => {
    const res = await SUPABASE.from('boardgames').delete().eq('id', id)
    return res.data;
  },
};
