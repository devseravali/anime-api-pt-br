-- CreateTable
CREATE TABLE "animes" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "arquivo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "animes_pkey" PRIMARY KEY ("id")
);
