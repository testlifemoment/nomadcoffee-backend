-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);
