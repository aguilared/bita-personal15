import prisma from "../../../../lib/prisma";

export default async function handle1(req, res) {
  const query = req.query;
  const page = parseInt(query.offset) || 1;
  const limit = parseInt(query.limit) || 15;
  const last_page = req.query.last_page;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const result = {};
  const count = await prisma.bitaEvents.count();
  const totalPage = Math.ceil(count / limit);
  const currentPage = page || 0;

  try {
    if (page < 0) {
      return res.status(400).json("Page value should not be negative");
    } else if (page === 1 && !last_page) {
      result.count = count;
      result.totalPage = totalPage;
      result.currentPage = currentPage;
      result.next = page + 1;
      result.previous = page - 1;
      result.results = await prisma.bitaEvents.findMany({
        take: limit,
        skip: startIndex,
        orderBy: {
          event_date: "desc",
        },
        include: {
          event: {
            select: { id: true, description: true },
          },
          tipoEvent: {
            select: { id: true, description: true },
          },
          bitacora: {
            select: { id: true, author: true, bitacora_date: true },
          },
        },
      });
      res.paginatedResult = result;
      result.currentCountPerPage = Object.keys(result.results).length;
      result.range = currentPage * limit;
      return res.status(200).json(result);
    } else if (endIndex < count && !last_page) {
      result.count = count;
      result.totalPage = totalPage;
      result.currentPage = currentPage;
      result.next = page + 1;
      result.previous = page - 1;

      result.results = await prisma.bitaEvents.findMany({
        take: limit,
        skip: startIndex,
        orderBy: {
          event_date: "desc",
        },
        include: {
          event: {
            select: { id: true, description: true },
          },
          tipoEvent: {
            select: { id: true, description: true },
          },
          bitacora: {
            select: { id: true, author: true, bitacora_date: true },
          },
        },
      });
      res.paginatedResult = result;
      result.currentCountPerPage = Object.keys(result.results).length;
      result.range = currentPage * limit;
      return res.status(200).json(result);
    } else if (startIndex > 0 && !last_page) {
      result.count = count;
      result.totalPage = totalPage;
      result.currentPage = currentPage;
      result.previous = {
        page: page - 1,
        limit: limit,
      };
      result.results = await prisma.bitaEvents.findMany({
        take: limit,
        skip: startIndex,
        orderBy: {
          event_date: "desc",
        },
        include: {
          event: {
            select: { id: true, description: true },
          },
          tipoEvent: {
            select: { id: true, description: true },
          },
          bitacora: {
            select: { id: true, author: true, bitacora_date: true },
          },
        },
      });
      res.paginatedResult = result;
      result.currentCountPerPage = Object.keys(result.results).length;
      result.range = currentPage * limit;
      return res.status(200).json(result);
    } else if (last_page === "true" && page === totalPage) {
      result.count = count;
      result.totalPage = totalPage;
      result.currentPage = totalPage;
      result.last = {
        page: totalPage,
        limit: limit,
      };
      result.results = await prisma.bitaEvents.findMany({
        take: limit,
        skip: startIndex,
        orderBy: {
          event_date: "desc",
        },
        include: {
          event: {
            select: { id: true, description: true },
          },
          tipoEvent: {
            select: { id: true, description: true },
          },
          bitacora: {
            select: { id: true, author: true, bitacora_date: true },
          },
        },
      });
      res.paginatedResult = result;
      result.currentCountPerPage = Object.keys(result.results).length;
      result.range = count;
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ error: "Resource not found" });
    }
  } catch (err) {
    console.error("error", err);
    return res.status(500).json(err);
  }
}
