-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "period" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "team" TEXT,
    "stacks" TEXT[],
    "links" JSONB NOT NULL,
    "companyId" TEXT,
    "achievements" TEXT[],
    "content" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Writing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "readTime" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Writing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Config" (
    "id" TEXT NOT NULL DEFAULT 'config',
    "writingHero" JSONB NOT NULL,
    "experienceHero" JSONB NOT NULL,
    "mainHero" JSONB NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorTitle" TEXT NOT NULL,
    "authorSummary" TEXT NOT NULL,
    "authorLocation" TEXT NOT NULL,
    "authorExperience" TEXT NOT NULL,
    "authorAvatar" TEXT,
    "authorSkills" TEXT[],
    "authorSocial" JSONB NOT NULL,
    "authorBadges" TEXT[],
    "authorKeyMetrics" JSONB NOT NULL,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_id_key" ON "Company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Writing_id_key" ON "Writing"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Writing_slug_key" ON "Writing"("slug");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
