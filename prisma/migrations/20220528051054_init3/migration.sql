/*
  Warnings:

  - You are about to drop the `_artistsTosong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_artistsTosong" DROP CONSTRAINT "_artistsTosong_A_fkey";

-- DropForeignKey
ALTER TABLE "_artistsTosong" DROP CONSTRAINT "_artistsTosong_B_fkey";

-- DropTable
DROP TABLE "_artistsTosong";

-- CreateTable
CREATE TABLE "songsAndartists" (
    "songId" INTEGER NOT NULL,
    "artistsId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "songsAndartists_pkey" PRIMARY KEY ("songId","artistsId")
);

-- AddForeignKey
ALTER TABLE "songsAndartists" ADD CONSTRAINT "songsAndartists_artistsId_fkey" FOREIGN KEY ("artistsId") REFERENCES "artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "songsAndartists" ADD CONSTRAINT "songsAndartists_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
