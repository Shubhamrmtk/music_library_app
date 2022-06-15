/*
  Warnings:

  - You are about to drop the `songsAndartists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "songsAndartists" DROP CONSTRAINT "songsAndartists_artistsId_fkey";

-- DropForeignKey
ALTER TABLE "songsAndartists" DROP CONSTRAINT "songsAndartists_songId_fkey";

-- DropTable
DROP TABLE "songsAndartists";

-- CreateTable
CREATE TABLE "_artistsTosong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_artistsTosong_AB_unique" ON "_artistsTosong"("A", "B");

-- CreateIndex
CREATE INDEX "_artistsTosong_B_index" ON "_artistsTosong"("B");

-- AddForeignKey
ALTER TABLE "_artistsTosong" ADD CONSTRAINT "_artistsTosong_A_fkey" FOREIGN KEY ("A") REFERENCES "artists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_artistsTosong" ADD CONSTRAINT "_artistsTosong_B_fkey" FOREIGN KEY ("B") REFERENCES "song"("id") ON DELETE CASCADE ON UPDATE CASCADE;
